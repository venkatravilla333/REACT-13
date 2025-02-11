import React, { Component } from 'react'
import Hoc from '../../../../../../../../Hoc'
export class A extends Component {
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

export default Hoc(A)