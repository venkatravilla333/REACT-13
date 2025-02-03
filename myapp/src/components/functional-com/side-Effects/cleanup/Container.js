import React, { useState } from 'react'
import Parent from './parent'

function Container() {

 var [display, setDisplay] = useState(true)
  return (
    <div>
      {display && <Parent />}
      <button onClick={()=>setDisplay(!display)}>toggle</button>
    </div>
  )
}

export default Container