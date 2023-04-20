import './App.css'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Contact from './pages/Contact/Contact'
import Death from './pages/Death/Death'
import Deconstruction from './pages/Deconstruction/Deconstruction'
import Salome from './pages/Salome/Salome'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" exact Component={HomePage} />
            <Route path="/contact" Component={Contact} />
            <Route path="/death" Component={Death} />
            <Route path="/deconstruction" Component={Deconstruction} />
            <Route path="/salome" Component={Salome} />
          </Routes>
        </Router>
        <Footer />
      </div>
    )
  }
}


export default App
