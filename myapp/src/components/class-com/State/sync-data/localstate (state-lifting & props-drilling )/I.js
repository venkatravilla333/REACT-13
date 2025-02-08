import React, { useState } from 'react'

function I(props) {
//  let [name, setName] = useState('apple')
  return (
    <div>
      <h2>I com: {props.name}</h2>
      {/* <button onClick={()=>setName('banana')}>update name</button> */}
    </div>
  )
}

export default I