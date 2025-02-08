import React from 'react'

function Child1(props) {
  console.log(props)
  // props.name = 'kohli'
  return (
    <div>This Child 1 component: {props.data}</div>
  )
}

export default Child1