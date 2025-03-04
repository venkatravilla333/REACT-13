import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  var products = [{name: 'apple', id: 1}, {name: 'banana', id: 2}, {name: 'grape', id: 3}, {name: 'papaya', id: 4}, {name: 'orange', id: 5}]
  return (
    <div className='products'>
      {
        products.map((product) => {
          return <Link state={product} to={`/products/${product.id}`}>{product.name}</Link>
          
        })
      }
      <Outlet/>
      {/* <Link to="/products/2">Banana</Link>
      <Link to="/products/3">Grap</Link>
      <Link to="/products/4">Papaya</Link> */}
    </div>
  )
}

export default Products