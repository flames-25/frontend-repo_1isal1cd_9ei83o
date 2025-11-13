import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const linkBase = 'text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'
  const active = 'text-blue-700 font-semibold underline'

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded bg-blue-600 text-white grid place-items-center font-bold">OG</div>
          <span className="font-semibold text-lg text-gray-900">OmniGauge Energy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/products" className={({isActive}) => `${linkBase} ${isActive?active:''}`}>Produk</NavLink>
          <NavLink to="/solutions" className={({isActive}) => `${linkBase} ${isActive?active:''}`}>Industri & Solusi</NavLink>
          <NavLink to="/case-studies" className={({isActive}) => `${linkBase} ${isActive?active:''}`}>Studi Kasus</NavLink>
          <NavLink to="/hse" className={({isActive}) => `${linkBase} ${isActive?active:''}`}>Kepatuhan & HSE</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/rfq" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md shadow">
            Request for Quote
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar