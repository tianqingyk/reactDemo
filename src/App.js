import FloatingDiv from './component/FloatingDiv/FloatingDiv'
import './App.css'
import React, { Component } from 'react'
import ImageBackgroundPage from './component/ImageBackgroundPage/ImageBackgroundPage'
import Header from './pages/Header/Header'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <div>
          <ImageBackgroundPage />
        </div>

        <FloatingDiv div={<div>
          <h1>This is a h1</h1>
          <span>This is a span</span>
        </div>} direction='left-to-right' />
      </div>
    )
  }
}


export default App
