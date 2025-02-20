// import React, { useEffect, useState } from 'react'
import axios from 'axios'

// function GetData() {
// var [loading, setLoading]  = useState(false)
// var [posts, setPosts]  = useState([])
// var [error, setError] = useState(null)
  
//   useEffect(() => {
//     setLoading(true)
//     setError(null)
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => {
//         setPosts(res.data)
//         setLoading(false)
//     })
//       .catch((err) => {
//         setError(err.message)
//         setLoading(false)
//     })
//   }, [])
  
//   return (
//     <div>
//       {loading ? <h2>Loading</h2> : error ? <h2>{error}</h2>:
      
//         posts.map((post) => {
//           return <div style={{ border: "2px solid black"}}>
//             <h1>Id: {post.id}</h1>
//             <h2>Title: {post.title}</h2>
//             <h3>Body: {post.body}</h3>
//           </div>
//         })
        
//        }
//     </div>
//   )
// }

// export default GetData


import React, { useEffect, useReducer } from 'react'

var initialState = {
  loading: false,
  posts: [],
  error: null
}

var postsReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_POST_REQUEST':
      return {
        loading: true,
        ...state
      }
      break;
    case 'FETCH_POST_SUCCESS':
      return {
        loading: false,
        posts: action.payload,
        error: null
      }
      break;
    case 'FETCH_POST_FAILURE':
      return {
        loading: false,
        posts: [],
        error: action.payload
      }
      break;
    default:
      return state
  }
}

function GetData() {

var [data, dispatch] = useReducer(postsReducer, initialState)
  console.log(data)
  
  useEffect(() => {
    console.log('effect runs')
    dispatch({type: "FETCH_POST_REQUEST"})
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
      console.log(res)
     dispatch({type: "FETCH_POST_SUCCESS", payload: res.data}) 
    })
    .catch((error) => {
      dispatch({type: "FETCH_POST_FAILURE", payload: error.message}) 
    })
  
  }, [])

  return (
    <div>
      
      {data.loading ? <h2>Loading</h2> : data.error ? <h3>{data.error}</h3> : (
        data.posts.map((post) => {
          return <div style={{border: "2px solid black"}}>
            <h4>Id: {post.id}</h4>
            <h4>Title: {post.title}</h4>
            <h4>Body: {post.body}</h4>
          </div>
        })
      )}
    </div>
  )
}

export default GetData