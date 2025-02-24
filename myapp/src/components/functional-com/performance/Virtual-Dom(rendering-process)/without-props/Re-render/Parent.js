import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  var [count, setCount] = useState(0)
  console.log('Parent ender')

  var updateCount = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h2>Parent: {count}</h2>
      <button onClick={updateCount}>update state</button>
      <Child/>
    </div>
  )
}

export default Parent