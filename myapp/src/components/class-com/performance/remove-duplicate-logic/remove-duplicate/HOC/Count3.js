import React, { Component } from 'react'
import Hoc from '../../../../../../../../Hoc'

export class C extends Component {
  render() {
    return (
      <div>
        <h3>Count3: {this.props.count}</h3>
        <button onDoubleClick={this.props.updateState}>update count</button>
      </div>
    )
  }
}

export default Hoc(C)