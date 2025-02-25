import React, { Component } from 'react'

export class Child extends Component {
  render() {
    console.log('regular component')
    return (
      <div>Child:{this.props.num.value}</div>
    )
  }
}

export default Child