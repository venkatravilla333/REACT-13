import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductDetails() {
  var {id} = useParams()
  console.log(id)

  var url = useLocation()
  console.log(url)
  return (
    <div>
      <h3>Product details</h3>
      <span>{url.state.id}: </span>
      <span>{url.state.name}</span>
     
    </div>
  )
}

export default ProductDetails