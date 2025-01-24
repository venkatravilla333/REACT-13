


import React, { useState } from 'react'


function Counter() {

  let [sNum, setSnum] = useState(0)

 


  let nvnum = 0

  let increaseNum = () => {
    nvnum++
    console.log(nvnum)
  }

console.log(sNum)
  console.log('render')
  return (
    <div>
      <h2>normal Counter: {nvnum}</h2>
      <button onClick={increaseNum}>increase normal num</button>
      <h2>state Counter: {sNum}</h2>
      <button onClick={()=>setSnum(sNum+1)}>increase state num</button>
    </div>
  )
}

export default Counter