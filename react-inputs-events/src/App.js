import React, { Component } from 'react'
import Username from './components/Username'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: "",
    }
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ userInput: e.target.value})
  }
 
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <label>Login with your username here
        <input 
          type="text" 
          placeholder= "Username"
          value = {this.state.userInput}
          onChange={ this.handleChange }
        />
        </label>
        <br />
        <button 
        onClick={()=> console.log(this.state)}> 
          STATE BUTTON
        </button>
        <Username 
        userName = {this.state.userInput}
        />
      </>
    )
  }
}
export default App