import React, { Component } from 'react'

export class Count3 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Count3: {this.props.count}</h3>
        <button onDoubleClick={this.props.updateState}>update count</button>
      </div>
    )
  }
}

export default Count3