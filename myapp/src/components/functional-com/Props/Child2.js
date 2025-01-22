import React from 'react'

function Child2(props) {
  console.log(props)
  return (
    <div>
      <h4>This Child 2 component</h4>
      <button onClick={()=> props.getData('child2 data')}>send data</button>
    </div>
  )
}

export default Child2