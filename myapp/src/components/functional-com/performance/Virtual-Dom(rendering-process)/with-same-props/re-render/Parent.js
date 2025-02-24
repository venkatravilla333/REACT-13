import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

function Parent() {
  var [count, setCount] = useState(0)
  // var [num, setNum] = useState(0) //primitive
  // var [num, setNum] = useState({value: 0})
  // var x = 100
  // var x = { value: 100 }
  // var x = ()=>{}
  
  var x = useMemo(() => {
    return { value: 100 }
  }, [])
  var y = {age: 40}

  // var x = useCallback(() => {
  //   return ()=>{}
  // }, [count])

  console.log('Parent ender')

  var updateCount = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h2>Parent: {count}</h2>
      <button onClick={updateCount}>update state</button>
      <Child x={{...x, ...y}} />
    </div>
  )
}

export default Parent