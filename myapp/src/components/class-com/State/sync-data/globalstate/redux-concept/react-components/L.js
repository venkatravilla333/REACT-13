import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/ActionCreator'
import { buyBook } from '../redux/books/actionCreator'

function L() {

  // console.log(store.getState())

  let noofcakes = useSelector((state) => state.cake.noOfCakes)
  let noofbooks = useSelector((state) => state.book.noOfBooks)
  
  let dispatch = useDispatch()

  return (
    <div>
      <h2>Component L : cakes: {noofcakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>buy cake</button>
      <h2>Component L : books: {noofbooks}</h2>
         <button onClick={()=>dispatch(buyBook())}>buy book</button>
     
    </div>
  )
}

export default L