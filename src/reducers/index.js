import { combineReducers } from "redux"

const initialState = {
  name: "hyt",
  count: 1,
  inputValue:'ddddda',
  list:['kkkkk','jjjjj']
}

function home(state = initialState, action) {
  switch (action.type) {
    case "TEST_REDUCER":
      return {
        ...state,
        count: state.count + 1
      }
    case "COUNT_PLUS":
      return {count: state.count + 1}
    case "COUNT_REDUCE":
      return {count: state.count - 1}
    case "ONCHANGE":
      let newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.inputValue
      return newState
    default:
      return state
  }
}

export default combineReducers({
  home
})