import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function CaseStudies(){
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch(`${BASE_URL}/case-studies`).then(r=>r.json()).then(setItems)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Studi Kasus & Proyek</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(c => (
            <div key={c.slug} className="border rounded-xl overflow-hidden bg-white">
              {c.image_url && <img src={c.image_url} alt={c.title} className="h-48 w-full object-cover" />}
              <div className="p-6">
                <div className="text-xs uppercase text-gray-500">{c.client}{c.location?` • ${c.location}`:''}</div>
                <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-gray-700"><span className="font-semibold">Tantangan:</span> {c.challenge}</p>
                <p className="mt-1 text-gray-700"><span className="font-semibold">Solusi:</span> {c.solution}</p>
                <p className="mt-1 text-gray-700"><span className="font-semibold">Hasil:</span> {c.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CaseStudies