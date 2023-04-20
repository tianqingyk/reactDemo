import './App.css'
import React, { Component } from 'react'

import HomePage from './pages/HomePage/HomePage'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <Navbar currentPage="/" />
        <Footer />
      </div>
    )
  }
}


export default App
