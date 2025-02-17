import React, { useState } from 'react'
import Modal from './Modal'

function Parent() {
  var [display, setDisplay] = useState(false)
  
  var toggelDisplay = () => {
    setDisplay(!display)
  }
  return (
    <div className='parent'>
      <button onClick={toggelDisplay}>open modal</button>
      {display && <Modal toggelDisplay={toggelDisplay} age={40} />}
    </div>
  )
}

export default Parent