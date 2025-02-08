import React, { useState } from 'react'

function Count1() {

  var [count, setCount] = useState(0)
  
  let increaseCount = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseCount}>increase count1</button>
    </div>
  )
}

export default Count1