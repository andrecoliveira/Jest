import React, { Component } from 'react'
import Login from './component/Login'


class App extends Component {
  render() {
    return (
      <div>
          <Login isLoggedIn={true} username="André Oliveira" />
      </div>
    )
  }
}

export default App
