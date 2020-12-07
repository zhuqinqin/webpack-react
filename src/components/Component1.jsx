import React from 'react';
import Component2 from './Component2.jsx'
class Component1 extends React.Component {
  render() {
    return (
      <div><Component2 />component child!!3<div>hello webpack!!! welcome this is a test</div></div>
    )
  }
}

export default Component1;