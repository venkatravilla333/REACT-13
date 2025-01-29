
import { combineReducers, createStore } from 'redux'
import { cakeReducer } from './cake/CakeReducer'
import { bookReducer } from './books/bookReducer'



let rootReducer = combineReducers({
  cake: cakeReducer,
  book: bookReducer
})




export let store = createStore(rootReducer)

// store.dispatch({type: '@@redux/INIT3.a.i.j.6.j'})

