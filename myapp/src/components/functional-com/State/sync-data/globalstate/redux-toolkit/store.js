import { configureStore} from '@reduxjs/toolkit'
import cakeReducer from './slices/cakeSlice/cakeSlice'
import bookReducer from './slices/bookSlice/bookSlice'


export let store = configureStore({
  reducer: {
    cake: cakeReducer,
    book: bookReducer,
    
  }
})