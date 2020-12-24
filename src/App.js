import React from 'react'
import {connect} from 'react-redux'

function App(props) {
  let {home, dispatch} = props;
  return (
    <div>
      <button onClick={()=>{
        dispatch({type:"COUNT_REDUCE"})
      }}>-</button>
      <span>{home.count}{home.name}</span>
      <button onClick={()=>{
        dispatch({type:"COUNT_PLUS"})
      }}>+</button>
      <button onClick={()=>{
        dispatch({type:"TEST_REDUCER"})
      }}>显示</button>
    </div>
  )
}
App = connect(state=>state)(App)

export default App;