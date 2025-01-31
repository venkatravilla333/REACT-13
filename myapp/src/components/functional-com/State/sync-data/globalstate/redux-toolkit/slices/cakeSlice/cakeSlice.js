import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  noOfCakes: 50
}

let cakeReducer = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    buyCake: (state) => {
      state.noOfCakes -= 1
    }
  }
})

export default cakeReducer.reducer

export let { buyCake } = cakeReducer.actions