import React from 'react'
import J from './J'
import K from './K'
import { useSelector } from 'react-redux'

function G() {

 let noofcakes = useSelector((state)=>state.cake.noOfCakes)
  return (
    <div>
      <h3>G com: {noofcakes }</h3>
      <J />
      <K />
    </div>
  )
}

export default G