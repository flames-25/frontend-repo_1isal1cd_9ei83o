import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Solutions from './pages/Solutions'
import CaseStudies from './pages/CaseStudies'
import HSE from './pages/HSE'
import RFQ from './pages/RFQ'

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:slug" element={<ProductDetail />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/hse" element={<HSE />} />
      <Route path="/rfq" element={<RFQ />} />
    </Routes>
  )
}

export default App