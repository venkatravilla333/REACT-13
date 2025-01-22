import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
  var name = 'sachin'
  // var data = 'hello'

  var [data, setData] = useState('hello')
  
  function getData(x) {
    console.log('clicked')
    console.log(x)
    // data = x
    setData(x)
  }
  return (
    <div>
      <h3>This is parent component : {name}</h3>
      <h3>Data from child: {data}</h3>
      <Child1 data={name} />
      <Child2 getData={getData} />
    </div>
  )
}

export default Parent