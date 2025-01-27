import React, { useState } from 'react'
import B from './B'
import C from './C'

export let nameContext = React.createContext()
export let ageContext = React.createContext()
export let countContext = React.createContext()
// console.log(nameContext._currentValue)

function A() {
  
 let [name, setName] = useState('Kohli')
 let [age, setAge] = useState(30)
 let [count, setCount] = useState(0)
  return (
    <div>
      <countContext.Provider value={count}>
      <ageContext.Provider value={age}>
      <nameContext.Provider value={name}>
      <B />
      <C />
      </nameContext.Provider>
      </ageContext.Provider>
      </countContext.Provider>
     
      <button onClick={()=>setName(name = 'dhoni')}>update name</button>
      <button onClick={()=>setAge(age= 35)}>update name</button>
      <button onClick={()=>setCount(count+1)}>increase count</button>
    </div>
  )
}

export default A