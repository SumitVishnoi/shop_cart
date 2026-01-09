import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App