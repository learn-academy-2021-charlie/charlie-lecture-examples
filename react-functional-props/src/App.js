import React, { Component } from 'react'
import './App.css'
import List from './components/List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      traderJoes: ["Peanut Butter", "Apples", "Orange Juice", "Oranges"],
      ralphs: ["Laundry Detergent", "Dish Soap", "Paper Towels", "Shampoo"],
      hardware: ["Paint", "Hammer", "Potting soil"],
      cart: []
    }
  }

  addItem = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }

  render() {
    return (
      <>
        <h1>Instacart Knockoff</h1>
        <h3>Trader Joes</h3>
        <List
          cartItem={this.state.traderJoes}
          addItem={ this.addItem}
        />
        <h3>Ralphs</h3>
        <List
          cartItem={this.state.ralphs}
          addItem={ this.addItem}
        />
        <h3>Hardware</h3>
        <List
          cartItem={this.state.hardware}
          addItem={ this.addItem}
        />
        <h3>Cart</h3>
        <ul>
          {this.state.cart.map(value => {
            return <li>{value}</li>
          })}
        </ul>
      </>
    )
  }
}
export default App
