import React, { Component } from 'react'
import './App.css'

// import nasaData from './nasaData.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nasa: "",
      currentPic: null
    }
  }

  componentDidMount(){
    let apiKey = process.env.REACT_APP_MY_NASA_API
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
    .then(response => response.json())
    .then(payload => this.setState({nasa: payload.photos}))
    .catch(errors => console.log("fetch errors:", errors))
  }

  getPic = () => {
    let randomNum = Math.floor(Math.random() * this.state.nasa.length)
    this.setState({currentPic: this.state.nasa[randomNum].img_src})
  }

  render() {
    console.log(this.state.currentPic)
    return (
      <>
        <h1>Random Mars Rover Images</h1>
        <button onClick={this.getPic}>Click me!</button>
        {this.state.currentPic && <img src={this.state.currentPic} alt="mars rover" style={ {height: "400px"} }/>}
      </>
    )
  }
}
export default App
