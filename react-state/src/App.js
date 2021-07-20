import React, { Component } from 'react'
import './App.css';
import Miles from './components/Miles.js'

class App extends Component {
  render() {
    return(
      <>
        <h1>Running App</h1>
        <h3 className="month">January</h3>
        <Miles />
        <h3 className="month">February</h3>
        <Miles />
        <h3 className="month">March</h3>
        <Miles />
        <h3 className="month">April</h3>
        <Miles />
      </>
    )
  }
}
export default App
