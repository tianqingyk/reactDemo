import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Contact from './pages/Contact/Contact'
import Death from './pages/Death/Death'
import Deconstruction from './pages/Deconstruction/Deconstruction'
import Salome from './pages/Salome/Salome'
import Navbar from './component/Navbar/Navbar'


class App extends Component {

  render () {
    return (
      <div className="App">
        <Header />
        <Router basename='/rectDemo'>
          <Routes>
            <Route path="/" exact Component={HomePage} />
            <Route path="/contact" exact Component={Contact} />
            <Route path="/death" exact Component={Death} />
            <Route path="/deconstruction" exact Component={Deconstruction} />
            <Route path="/salome" exact Component={Salome} />
          </Routes>
        </Router>
        <Footer />
      </div>
    )
  }
}


export default App
