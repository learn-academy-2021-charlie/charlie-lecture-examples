import React, { Component } from 'react'

class Miles extends Component {
  constructor(props){
    super(props)
    this.state = {
      miles: 0,
      color: "pink"
    }
  }

  addMile = () => {
    this.setState({miles: this.state.miles + 1})
  }

  render() {
    console.log(this.state.miles)
    return (
      <>
        <p>Miles: {this.state.miles}</p>
        <button
          onClick={this.addMile}
          style={ {color: this.state.color} }
        >
          Add a mile
        </button>
      </>
    )
  }
}
export default Miles
