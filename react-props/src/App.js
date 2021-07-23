import React, { Component } from 'react'
import './App.css'
import GreetPerson from './components/GreetPerson'

class App extends Component {
  constructor(){
    super()
    this.state={
      namesArray: [
        "RoboCop",
        "RickyBobby",
        "BabaYaga",
        "BobbyDraper"
      ],
      currentPerson: 0,
    }

  }
  handleGreeting = () => {
    let randomNum = Math.floor(Math.random() * this.state.namesArray.length)
    this.setState({currentPerson: randomNum})
  }
  render() {
    return (
      <>
        <GreetPerson 
        person={this.state.namesArray[this.state.currentPerson]}
        handleGreeting = {this.handleGreeting}
        />
      </>
    )
  }
}
export default App