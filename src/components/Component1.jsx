import React from 'react';
import Component2 from './Component2.jsx'
import '../css/normal.css'
import store from "../stores/index"
class Component1 extends React.Component {
  render() {
    return (
      <div>
        <button onClick={()=>{store.dispatch({type:"TEST_REDUCER"})}}>-</button>
        <Component2 />component child!!3<div>hello webpack!!! welcome this is a test</div></div>
    )
  }
}

export default Component1;