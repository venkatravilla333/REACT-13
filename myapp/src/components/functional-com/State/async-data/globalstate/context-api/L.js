import React, { useContext, useState } from 'react'
import { dataContext} from './A'

function L() {
//  let name =  nameContext._currentValue
  let data = useContext(dataContext)
  console.log(data)

  return (
    <div>
      {data.loading ? (<h2>Loading</h2>) : data.error ? (<h2>{data.error}</h2>): 
      
       (data.posts.map((post) => {
          return <div style={{ border: "2px solid black"}}>
            <h1>Id: {post.id}</h1>
            <h2>Title: {post.title}</h2>
            <h3>Body: {post.body}</h3>
          </div>
        }))
        
       }
    </div>
  )
}

export default L