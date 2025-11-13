import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Products(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BASE_URL}/products`).then(r=>r.json()).then(d=>{ setItems(d); setLoading(false) })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Katalog Produk</h1>
          <a href="/rfq" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Minta Penawaran</a>
        </div>

        {loading ? (
          <p className="text-gray-600">Memuat...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(p => (
              <a key={p.slug} href={`/products/${p.slug}`} className="group border rounded-xl overflow-hidden hover:shadow-md transition">
                <img src={p.image_url} alt={p.name} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <div className="text-xs uppercase text-gray-500">{p.category}</div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700">{p.name}</div>
                  <div className="text-sm text-gray-600 line-clamp-2 mt-1">{p.description}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Products