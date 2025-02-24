import React from 'react'

function Child(props) {
   console.log('Child Initial ender')
  return (
    <div>Child : {props.count}</div>
  )
}

export default Child