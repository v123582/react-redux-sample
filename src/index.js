import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import App from './App'

const renderTarget = document.getElementById('root')

console.log('===== 1 =====')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  renderTarget
)
