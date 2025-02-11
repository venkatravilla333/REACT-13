import React, { Component } from 'react'
import Hoc from '../../../../../../../../Hoc'

export class B extends Component {
  render() {
    return (
      <div>
        <h3>Count2: {this.props.count}</h3>
        <button onMouseOver={this.props.updateState}>update count</button>
      </div>
    )
  }
}

export default  Hoc(B)