import React, { useState } from 'react'
import Destructure from './Destructure'

function Parent() {
 let [city] = useState('mumbai')
  return (
    <div>
      <Destructure city={city} />
    </div>
  )
}

export default Parent