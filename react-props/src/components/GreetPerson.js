import React, { Component } from 'react'


class GreetPerson extends Component {
  render() {
      console.log(this.props)
    return (
      <>
        <div id={`${this.props.person}`}>
          <h1 onClick={this.props.handleGreeting}>Hello {this.props.person}</h1>
          <button onClick={this.props.handleGreeting}>
              BUTTON
          </button>
        </div>
      </>
    )
  }
}
export default GreetPerson