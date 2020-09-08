import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import App from './app'

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.querySelector('#root'))
