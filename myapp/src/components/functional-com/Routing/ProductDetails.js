import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  var {id} = useParams()
  console.log(id)
  return (
    <div>ProductDetails : {id}</div>
  )
}

export default ProductDetails