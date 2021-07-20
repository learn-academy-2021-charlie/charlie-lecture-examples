# React State

Need this section to create a class component in React:
- import React
- define the class
- inherit from React.Component or destructured Component
- render method
- return
- React Fragments to contain the markup
```
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
      </>
    )
  }
}
export default App
```



State example:
```
import React, { Component } from 'react'
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      miles: 0
    }
  }

  addMile = () => {
    this.setState({miles: this.state.miles + 1})
  }

  render() {
    console.log(this.state.miles)
    return (
      <>
        <h1>Running App</h1>
        <p>Miles: {this.state.miles}</p>
        <button onClick={this.addMile}>Add a mile</button>
      </>
    )
  }
}
export default App
```
