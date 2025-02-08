import axios from "axios"
import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "../actionTypes/postsActiontypes"


let getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}
let getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts //db data
  }
}
let getPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    payload: error
  }
}


export let fetchPost = () => {
  return (dispatch) => {
    dispatch(getPostsRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        // console.log(res)
        // let data = res.data
        dispatch(getPostsSuccess(res.data))
       })
      .catch((err) => {
        dispatch(getPostsFailure(err.message))
       })
  }
}