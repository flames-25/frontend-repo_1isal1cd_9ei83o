import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Solutions(){
  const [items, setItems] = useState([])
  const [segment, setSegment] = useState('')

  useEffect(()=>{
    const q = segment ? `?segment=${segment}` : ''
    fetch(`${BASE_URL}/solutions${q}`).then(r=>r.json()).then(setItems)
  }, [segment])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Industri & Solusi</h1>
          <select value={segment} onChange={e=>setSegment(e.target.value)} className="border rounded px-3 py-2">
            <option value="">Semua Segmen</option>
            <option value="upstream">Upstream</option>
            <option value="midstream">Midstream</option>
            <option value="downstream">Downstream</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(s => (
            <div key={s.slug} className="border rounded-xl p-6 bg-gray-50">
              <div className="text-xs uppercase text-gray-500">{s.segment}</div>
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-700"><span className="font-semibold">Masalah:</span> {s.problem}</p>
              <p className="mt-1 text-gray-700"><span className="font-semibold">Solusi:</span> {s.solution}</p>
              {s.related_products?.length>0 && (
                <div className="mt-3 text-sm text-gray-600">Produk terkait: {s.related_products.join(', ')}</div>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Solutions