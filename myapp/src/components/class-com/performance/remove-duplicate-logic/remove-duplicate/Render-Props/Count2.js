import React, { Component } from 'react'

export class Count2 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
         <h3>Count2: {this.props.count}</h3>
        <button onMouseOver={this.props.updateState}>update count</button>
      </div>
    )
  }
}

export default Count2