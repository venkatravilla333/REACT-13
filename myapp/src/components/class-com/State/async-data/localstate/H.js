import React, { useEffect, useState } from 'react'

function H() {
  let [loading, setLoading] = useState(false)
  let [posts, setPosts] = useState([])
  let [error, setError] = useState(null)

  useEffect(() => {
    console.log('effect runs')
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPosts(data)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
        setError(error.mesage)
        setLoading(false)
      })
  }, [])

  let getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPosts(data)
      })
 }
  
  console.log('render')
  return (
    <div>
      <button onClick={getData}>get data</button>
      {loading ? <h2>Loading</h2> : error ? <h2>{error}</h2>: 
      
        posts.map((post) => {
          return <div style={{ border: "2px solid black"}}>
            <h1>Id: {post.id}</h1>
            <h2>Title: {post.title}</h2>
            <h3>Body: {post.body}</h3>
          </div>
        })
        
       }
    </div>
  )
}

export default H