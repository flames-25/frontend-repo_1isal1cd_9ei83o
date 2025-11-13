function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-semibold text-gray-900">OmniGauge Energy</div>
          <p className="mt-2">Solusi peralatan industri untuk upstream, midstream, dan downstream.</p>
        </div>
        <div>
          <div className="font-semibold text-gray-900 mb-2">Produk</div>
          <ul className="space-y-1">
            <li><a href="/products" className="hover:text-blue-600">Katup Kriogenik</a></li>
            <li><a href="/products" className="hover:text-blue-600">Pompa</a></li>
            <li><a href="/products" className="hover:text-blue-600">Sensor Pengeboran</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900 mb-2">Kontak</div>
          <p>Email: sales@omnigauge.energy</p>
          <p>Telepon: +62 21 555 1234</p>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} OmniGauge Energy. All rights reserved.</div>
    </footer>
  )
}

export default Footer