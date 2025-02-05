import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../redux/actions/postsActions'

function L() {
  let data = useSelector((state) => state)
  console.log(data.posts)

 let dispatch = useDispatch()

  useEffect(() => {
    console.log('use effect')
    dispatch(fetchPost())
  }, [])

  console.log('render')
  
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

export default L