import React, { useState } from 'react'

function Destructure(props) {
  let [data, setData] = useState({ name: 'sachin', age: 40 })

  
  let {name, age} = data
  
  let {city} = props
  return (
    <div>
      {/* <h3>Name: {data.name}</h3>
      <h3>Age: {data.age }</h3> */}
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      {/* <h3>City: {props.city}</h3> */}
      <h3>City: {city}</h3>
    </div>
  )
}

export default Destructure