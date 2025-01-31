import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  noOfBooks: 100
}

let bookReducer = createSlice({
  name: 'book',
  initialState,
  reducers: {
    buyBook: (state) => {
      state.noOfBooks -= 1
    }
  }
})

export default bookReducer.reducer

export let { buyBook } = bookReducer.actions