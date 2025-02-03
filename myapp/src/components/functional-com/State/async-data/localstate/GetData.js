import React, { useEffect, useState } from 'react'

function GetData() {
  let [posts, setPosts] = useState([])

  // useEffect(() => {
  //   console.log('effect runs')
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setPosts(data)
  //     })
  // }, [])

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
      {
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

export default GetData