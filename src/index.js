import React from 'react'
import ReactDom from 'react-dom'
import Component1 from './components/Component1.jsx'
import { Provider } from 'react-redux'
import App from './App.js'
import store from "./stores/index"
import TodoList from './components/TodoList'
require('./css/special.scss')

ReactDom.render(
  <Provider store={store}>
      <App/>
      {/* <TodoList/> */}
  </Provider>,
  document.getElementById("root")
)