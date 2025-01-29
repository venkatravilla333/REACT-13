import { BUY_BOOK } from "./actiontype"


let initialState = {
  noOfBooks: 100
}

export let bookReducer = (state= initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return { noOfBooks: state.noOfBooks - 1 }
      break;
    default: return state
  }
}