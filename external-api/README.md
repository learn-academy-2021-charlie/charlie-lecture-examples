# Fetch

- Javascript is synchronous
- Fetch allows for asynchronous actions

- Every request will get a response
- Fetch will return a Promise
- Promise is a JS object in one of three states:
  - pending: initial state, neither fulfilled nor rejected.
  - fulfilled: meaning that the operation was completed successfully.
  - rejected: meaning that the operation failed.


IP Address API: https://ipapi.co/api/?shell#complete-location5
Endpoint: https://ipapi.co/json/



this.state = {
  ip: {
    asn: "AS11492"
    city: "Boise"
    continent_code: "NA"
    country: "US"
    country_area: 9629091
    country_calling_code: "+1"
    country_capital: "Washington"
  }
}



import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ip: ""
    }
  }

  getIP = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => this.setState({ip: payload.ip}))
  }

  render() {
    console.log("state:", this.state.ip)
    return (
      <>
        <h1>Find Your IP Address</h1>
        <button onClick={this.getIP}>Click me!</button>
        <p>Your IP Address: {this.state.ip}</p>
      </>
    )
  }
}
export default App




API Keys:
Make a .env file on the outer level of the app
REACT_APP_ - must be named like this
REACT_APP_MY_NASA_API - can be more descriptive
Add .env to gitignore
Access key in App.js as:
let apiKey = process.env.REACT_APP_MY_NASA_API
Restart the server
