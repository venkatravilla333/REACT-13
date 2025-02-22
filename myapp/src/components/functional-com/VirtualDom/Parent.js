import React, { useState } from 'react'
import Child from './Child'

function Parent() { 
  var [count, setCount] = useState(0)
  console.log('parent render')
  // var x = 100 //primitive
  var x = {value: 100} //reference
  return (
    <div>
      <h4>Parent: {count}</h4>
     <button onClick={()=>setCount(count+1)}>update state</button>
      <Child x={x} />
    </div>
  )
}

export default Parent