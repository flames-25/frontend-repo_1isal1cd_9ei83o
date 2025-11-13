import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function Home(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border bg-gray-50">
          <h3 className="font-semibold text-gray-900">Katalog Produk Digital</h3>
          <p className="text-gray-600 mt-2">Gambar resolusi tinggi, deskripsi mendalam, spesifikasi teknis & sertifikasi dalam PDF.</p>
        </div>
        <div className="p-6 rounded-xl border bg-gray-50">
          <h3 className="font-semibold text-gray-900">Industri & Solusi</h3>
          <p className="text-gray-600 mt-2">Bagaimana produk kami memecahkan masalah di upstream, midstream, dan downstream.</p>
        </div>
        <div className="p-6 rounded-xl border bg-gray-50">
          <h3 className="font-semibold text-gray-900">Studi Kasus</h3>
          <p className="text-gray-600 mt-2">Contoh proyek nyata yang membangun kepercayaan dan otoritas teknis.</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home