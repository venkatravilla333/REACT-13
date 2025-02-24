import React from 'react'

function Child(props) {
   console.log('Child ender')
  return (
    <div>Child: </div>
  )
}

export default React.memo(Child)