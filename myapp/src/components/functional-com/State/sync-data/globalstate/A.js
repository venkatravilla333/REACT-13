import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {
 let [name, setName] = useState('apple')

  return (
    <div>
      <B name={name} />
      <C name={name} />
    </div>
  )
}

export default A