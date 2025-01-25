import React from 'react'
import J from './J'
import K from './K'

function G(props) {
  console.log(props)
  return (
    <div>
      <J name={props.name} />
      <K />
    </div>
  )
}

export default G