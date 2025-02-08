import React, { useState } from 'react'
import H from './H'
import I from './I'

function E(props) {
//  let [name, setName] = useState('apple')

  return (
    <div>
      <H name={props.name} />
      <I name={props.name}/>
    </div>
  )
}

export default E