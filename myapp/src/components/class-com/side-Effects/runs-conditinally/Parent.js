import React, { useEffect, useState } from 'react'

function Parent() {
 var[normalValue, setNormalValue]= useState(0)
  var [domValue, setDomValue] = useState(0)
  
  let updateNormalValue = () => {
    setNormalValue(normalValue+1)
  }
  let updateDomValue = () => {
   setDomValue(domValue+1)
  }

  useEffect(() => {
    console.log('use effect')
    document.title = domValue
  }, [domValue])
  console.log('render')
  return (
    <div>
      <h2>Normal value: {normalValue}</h2>
      <button onClick={updateNormalValue}>update normal value</button>
      <h2>Dom value: {domValue}</h2>
      <button onClick={updateDomValue}>update dom value</button>
    </div>
  )
}

export default Parent