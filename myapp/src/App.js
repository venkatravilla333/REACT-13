import React from 'react'
import Home from './components/functional-com/Routing/Home'
// import About from './components/functional-com/Routing/About'
import Products from './components/functional-com/Routing/Products'


import '../src/components/functional-com/Routing/style.css'

import {Routes, Route, Link, useLocation} from 'react-router-dom'
import PageNotFound from './components/functional-com/Routing/PageNotFound'
import Header from './components/functional-com/Routing/Header'
import Footer from './components/functional-com/Routing/Footer'
import ProductDetails from './components/functional-com/Routing/ProductDetails'
import Controlled from './components/functional-com/Controlled & Uncontrolled/Controlled.js'
import Uncontrolled from './components/functional-com/Controlled & Uncontrolled/Uncontrolled.js'

var LazyAbout = React.lazy(()=> import('./components/functional-com/Routing/About.js'))

function App() {
  var url = useLocation()
  console.log(url)

  return (
    <div>
     {/* {url.pathname !=='/about' &&  <Header/> }
      <Routes>
        <Route path='/'>
          <Route index element={<Home/> } />
           <Route path='/about' element={
          <React.Suspense fallback='Loading'>
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path='/products' element={<Products/> } >
          <Route path=':id' element={<ProductDetails />} />
        </Route>
        <Route path='*' element={<PageNotFound/> } />
        </Route>
        
      </Routes>
      <Footer/> */}
      <Controlled />
      <Uncontrolled/>
    
    </div>
  )
}

export default App