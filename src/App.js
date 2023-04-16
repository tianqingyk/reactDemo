import './App.css'
import React, { Component } from 'react'

import HomePage from './pages/Main/HomePage/HomePage'
import Header from './component/Header/Header'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <HomePage />
      </div>
    )
  }
}


export default App
