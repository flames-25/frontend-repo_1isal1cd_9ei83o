function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Pemasok Peralatan Industri untuk Sektor Minyak & Gas
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Katup kriogenik, pompa, dan sensor pengeboran bersertifikasi untuk keandalan di lingkungan paling ekstrem.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md shadow">Lihat Katalog</a>
              <a href="/rfq" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 px-5 py-3 rounded-md">Minta Penawaran (RFQ)</a>
            </div>
            <p className="mt-3 text-sm text-gray-500">ISO 9001 • API 6D • ATEX</p>
          </div>
          <div className="relative">
            <img className="rounded-xl shadow-lg w-full object-cover h-80" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop" alt="Oil and gas facility" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero