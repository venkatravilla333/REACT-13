import {configureStore} from '@reduxjs/toolkit'

import postsReducer from './slices/postsSlice'

export let store = configureStore({
  reducer: {
    postsReducer: postsReducer
  }
})