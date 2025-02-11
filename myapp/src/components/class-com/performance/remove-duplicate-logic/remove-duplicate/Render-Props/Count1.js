import React, { Component } from 'react'

export class Count1 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Count1: {this.props.count}</h3>
        <button onClick={this.props.updateState}>update count</button>
      </div>
    )
  }
}

export default Count1