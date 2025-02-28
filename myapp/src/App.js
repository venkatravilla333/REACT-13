import React from 'react'
import Home from './components/functional-com/Routing/Home'
import About from './components/functional-com/Routing/About'
import Products from './components/functional-com/Routing/Products'

import '../src/components/functional-com/Routing/style.css'

import {Routes, Route, Link} from 'react-router-dom'
import PageNotFound from './components/functional-com/Routing/PageNotFound'

function App() {
  return (
    <div>
      <nav>
         <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About/> } />
        <Route path='/products' element={<Products/> } />
        <Route path='*' element={<PageNotFound/> } />
      </Routes>
    
    </div>
  )
}

export default App