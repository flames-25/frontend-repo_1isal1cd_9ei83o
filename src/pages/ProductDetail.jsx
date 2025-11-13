import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductDetail(){
  const { slug } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch(`${BASE_URL}/products/${slug}`).then(r=>r.json()).then(d=>{ setData(d); setLoading(false) })
  }, [slug])

  if(loading) return <div className="min-h-screen"><Navbar /><div className="p-10">Memuat...</div><Footer /></div>

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid md:grid-cols-2 gap-8">
          <img src={data.image_url} alt={data.name} className="rounded-xl w-full h-80 object-cover" />
          <div>
            <div className="text-xs uppercase text-gray-500">{data.category}</div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <p className="mt-3 text-gray-700">{data.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.tags?.map(t => <span key={t} className="text-xs bg-gray-100 border px-2 py-1 rounded">{t}</span>)}
            </div>
            <div className="mt-6 flex gap-3">
              <a href={data.spec_pdf_url} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Unduh Spec Sheet (PDF)</a>
              {data.certifications?.map(c => (
                <a key={c.name} href={c.pdf_url} target="_blank" className="bg-white border hover:bg-gray-50 text-gray-900 px-4 py-2 rounded">{c.name}</a>
              ))}
            </div>
            <a href={`/rfq?product=${data.slug}`} className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Minta Penawaran</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductDetail