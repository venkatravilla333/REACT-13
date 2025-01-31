
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { cakeReducer } from './cake/CakeReducer'
import { bookReducer } from './books/bookReducer'
import { composeWithDevTools } from '@redux-devtools/extension';

import logger from 'redux-logger'



let rootReducer = combineReducers({
  cake: cakeReducer,
  book: bookReducer
})




export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)) )

// store.dispatch({type: '@@redux/INIT3.a.i.j.6.j'})

