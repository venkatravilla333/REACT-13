import React, { Component } from 'react'

export class Child1 extends Component {
  render() {
    return (
      <div>Child1: {this.props.name}</div>
    )
  }
}

export default Child1