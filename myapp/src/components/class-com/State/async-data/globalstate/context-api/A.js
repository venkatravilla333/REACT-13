import React, { useEffect, useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'

export let dataContext = React.createContext()

// console.log(nameContext._currentValue)

function A() {
  
 let [loading, setLoading] = useState(false)
 let [posts, setPosts] = useState([])
  let [error, setError] = useState(null)
  
 useEffect(() => {
    console.log('effect runs')
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res)
        setPosts(res.data)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
        setError(error.mesage)
        setLoading(false)
      })
  }, [])
  return (
    <div>
      <dataContext.Provider value={{loading, posts, error}}>
      <B />
      <C />
     </dataContext.Provider>
    </div>
  )
}

export default A