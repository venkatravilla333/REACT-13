import React, { useState } from 'react'

function Child(props) {
   console.log('child render')
  return (
    <div>
      <h4>Child: {props.x.value}</h4>
      
    </div>
  )
}

export default React.memo(Child)