import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function H() {

  let data = useSelector((state) => state)

  return (
    <div>
      {
        data.loading ? <h1>Loading</h1> : data.error ? <h2>{data.error}</h2> :
        <div>
            {
              data.posts.map((post) => {
                return <div style={{border: "2px solid red"}}>
                  <h2>Id: {post.id}</h2>
                  <h4>Title: {post.title}</h4>
                  <p>Body: {post.body}</p>
                </div>
              })
            }
        </div>  
      }
    </div>
  )
}

export default H