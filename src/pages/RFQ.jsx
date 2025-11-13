import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function RFQ(){
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('')

  useEffect(()=>{
    fetch(`${BASE_URL}/products`).then(r=>r.json()).then(setProducts)
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      company_name: form.get('company_name'),
      contact_name: form.get('contact_name'),
      email: form.get('email'),
      phone: form.get('phone'),
      project_name: form.get('project_name'),
      project_description: form.get('project_description'),
      specifications: form.get('specifications'),
      product_slugs: form.getAll('product_slugs'),
      quantity: form.get('quantity') ? Number(form.get('quantity')) : null,
      timeline: form.get('timeline'),
      location: form.get('location'),
      notes: form.get('notes'),
    }

    try{
      setStatus('Mengirim...')
      const res = await fetch(`${BASE_URL}/rfq`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Gagal mengirim')
      setStatus('✅ RFQ diterima. Tim kami akan menghubungi Anda.')
      e.currentTarget.reset()
    }catch(err){
      setStatus('❌ Terjadi kesalahan. Silakan coba lagi.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Request for Quote (RFQ)</h1>
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Perusahaan</label>
              <input name="company_name" required className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Kontak</label>
              <input name="contact_name" required className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Telepon</label>
              <input name="phone" className="mt-1 w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nama Proyek</label>
            <input name="project_name" className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Deskripsi Proyek</label>
            <textarea name="project_description" rows="3" className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Spesifikasi Teknis</label>
            <textarea name="specifications" rows="4" placeholder="Tekanan operasi, temperatur, material, sertifikasi diperlukan, dll." className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Produk yang Diminta</label>
            <select name="product_slugs" multiple className="w-full border rounded px-3 py-2 h-32">
              {products.map(p => <option key={p.slug} value={p.slug}>{p.name}</option>)}
            </select>
            <p className="text-xs text-gray-500 mt-1">Tahan Ctrl/Cmd untuk memilih lebih dari satu.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Jumlah</label>
              <input type="number" min="1" name="quantity" className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Timeline</label>
              <input name="timeline" placeholder="Contoh: 6-8 minggu" className="mt-1 w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Lokasi</label>
              <input name="location" className="mt-1 w-full border rounded px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Catatan Tambahan</label>
            <textarea name="notes" rows="3" className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">Kami akan membalas dalam 1-2 hari kerja.</div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">Kirim RFQ</button>
          </div>

          {status && (<div className="text-sm mt-2">{status}</div>)}
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default RFQ