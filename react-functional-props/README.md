# React Functional Props

Class based component with JSX
```
class App extends Component {
  render() {
    return (
      <>
        <h1>Instacart Knockoff</h1>
        <h3>Tracder Joes</h3>
        <ul>
          <li>Peanut Butter</li>
          <li>Apples</li>
          <li>Orange Juice</li>
        </ul>
        <h3>Ralphs</h3>
        <ul>
          <li>Laundry Detergent</li>
          <li>Dish Soap</li>
          <li>Paper Towels</li>
        </ul>
      </>
    )
  }
}
export default App
```


State and mapping the state object arrays in the JSX
```
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      traderJoes: ["Peanut Butter", "Apples", "Orange Juice", "Oranges"],
      ralphs: ["Laundry Detergent", "Dish Soap", "Paper Towels", "Shampoo"]
    }
  }
  render() {
    return (
      <>
        <h1>Instacart Knockoff</h1>
        <h3>Tracder Joes</h3>
        <ul>
          {this.state.traderJoes.map(value => {
            return <li>{value}</li>
          })}
        </ul>
        <h3>Ralphs</h3>
        <ul>
          {this.state.ralphs.map(value => {
            return <li>{value}</li>
          })}
        </ul>
      </>
    )
  }
}
export default App
```

Refactors to add display component and pass the arrays in state as props
```
import React, { Component } from 'react'
import './App.css'
import List from './components/List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      traderJoes: ["Peanut Butter", "Apples", "Orange Juice", "Oranges"],
      ralphs: ["Laundry Detergent", "Dish Soap", "Paper Towels", "Shampoo"],
      hardware: ["paint", "hammer", "potting soil"]
    }
  }
  render() {
    return (
      <>
        <h1>Instacart Knockoff</h1>
        <h3>Trader Joes</h3>
        <List cartItem={this.state.traderJoes} />
        <h3>Ralphs</h3>
        <List cartItem={this.state.ralphs} />
        <h3>Hardware</h3>
        <List cartItem={this.state.hardware} />
      </>
    )
  }
}
export default App
```

```
import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.cartItem.map(value => {
            return <li>{value}</li>
          })}
        </ul>
      </>
    )
  }
}
export default List
```
