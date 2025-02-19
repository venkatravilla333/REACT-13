import React, { Component } from 'react'

export class Timer extends Component {
  timer
  constructor(props) {
    super(props)
    this.state = {
       timer: 0
    }
  }
 
  componentDidMount() {
   this.timer = setInterval(() => {
      this.setState({
       timer: this.state.timer + 1
     })
   }, 1000)
 }


  componentWillUnmount() {
    clearInterval(this.timer)
  }


  render() {
    return (
      <div>
        <h3>Timer: {this.state.timer}</h3>
        <button onClick={()=>clearInterval(this.timer)}>stop</button>
      </div>
    )
  }
}

export default Timer