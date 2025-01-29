import React, { useContext, useState } from 'react'
import { ageContext, countContext, nameContext } from './A'

function L() {
//  let name =  nameContext._currentValue
 let name =  useContext(nameContext)
 let age =  useContext(ageContext)
 let count =  useContext(countContext)
  return (
    <div>
      <h2>L com: name: {name}</h2>
      <h2>L com: age: {age}</h2>
      <h2>L com: count: {count}</h2>
    </div>
  )
}

export default L