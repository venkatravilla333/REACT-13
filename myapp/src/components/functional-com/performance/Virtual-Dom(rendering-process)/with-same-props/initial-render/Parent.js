import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  var [count, setCount] = useState(0)
  console.log('Parent Initial ender')

  var updateCount = () => {
    setCount(count)
  }
  return (
    <div>
      <h2>Parent: {count}</h2>
      <button onClick={updateCount}>update state</button>
      <Child count={count} />
    </div>
  )
}

export default Parent