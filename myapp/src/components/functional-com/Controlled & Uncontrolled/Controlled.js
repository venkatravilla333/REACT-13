import React, { useState } from 'react'

function Controlled() {
 var [data, setData] = useState('')

  var changeHandler = (e) => {
    setData(e.target.value)
   
  }
  console.log(data)
  return (
    <div>
      <h3>data: {data}</h3>
      <input type="text" value={data} onChange={changeHandler}/>
    </div>
  )
}

export default Controlled