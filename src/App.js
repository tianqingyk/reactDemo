import './App.css'
import React, { Component } from 'react'
import Header from './pages/Header/Header'
import HomePage from './pages/Main/HomePage/HomePage'

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
