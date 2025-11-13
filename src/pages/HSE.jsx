import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function HSE(){
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Kepatuhan & Keamanan (HSE)</h1>
        <p className="text-gray-700">Kami berkomitmen pada standar keselamatan, kesehatan, dan lingkungan yang ketat di seluruh operasi dan supply chain kami.</p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
          <li>Manajemen Risiko Operasional mengikuti ISO 31000</li>
          <li>Sistem Mutu Tersertifikasi ISO 9001:2015</li>
          <li>Kepatuhan standar API untuk produk terkait (mis. API 6D untuk katup)</li>
          <li>Pelatihan HSE berkala untuk seluruh tim dan mitra</li>
          <li>Pelaporan insiden dan CAPA transparan</li>
        </ul>
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <p>Unduh kebijakan HSE kami:</p>
          <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" className="text-blue-600 underline" target="_blank">HSE Policy (PDF)</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HSE