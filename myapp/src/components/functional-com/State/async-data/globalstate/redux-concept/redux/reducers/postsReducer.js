import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS } from "../actionTypes/postsActiontypes"

let initialState = {
  loading: false,
  posts: [],
  error: null
}

export let postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };
      break;
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
        // loading: false,
        // error: null
        
      }
      break;
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
       
      }
      break;
    default: return state
  }
}