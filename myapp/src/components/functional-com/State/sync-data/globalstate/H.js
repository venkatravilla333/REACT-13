import React, { useState } from 'react'

function H(props) {
  console.log(props)
//  let [name, setName] = useState('apple')
  return (
    <div>
      <h2>H com: {props.name}</h2>
    </div>
  )
}

export default H