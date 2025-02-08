import React, { Component } from 'react'

export class Destructure extends Component {
  constructor() {
    super()
    this.state = {
      name: 'sachin'
    }
  }

  render() {
    console.log(this)
    let { count } = this.props 
    let {name} = this.state
    return (
      // <div>Destructure: {this.props.count}</div>
      
      <div>
        <h2>Name: {name}</h2>
        <h3>Destructure: {count}</h3>
      </div>
    )

  }
}

export default Destructure