import React, {useState, useMemo, useCallback} from 'react'
import Child from './Child'

// var x = {value: 100}
function Parent() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  
  var x = useMemo(() => {
     return  {value: 100}
  }, [num]) 

  console.log(x)
  var y = useCallback(() => {
     return  ()=>{}
  }, [num]) 
  console.log(y)
//  var x = {value: 100}
  // var x = 'sachin'
  // var x = [100]
  // var x = ()=>{}
  
  
  let updateCount = () => {
    console.log('state update in parent')
    setCount(count+1)
  }
  let updateNum = () => {
    console.log('state update in parent')
    setNum(num+10)
  }
  
  console.log('parent render')
  return (
    <div>
      <h3>This is parent: {count}</h3>
      <h3>This is parent: {num}</h3>
      <button onClick={updateCount}>update count</button>
      <button onClick={updateNum}>update num</button>
      
      <Child x = {x} />
    </div>
  )
}

export default Parent