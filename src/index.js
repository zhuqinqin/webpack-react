import React from 'react'
import ReactDom from 'react-dom'
import Component1 from './components/Component1.jsx'
require('./css/special.scss')

ReactDom.render(
  <Component1 />
  
  , document.getElementById("root")
)