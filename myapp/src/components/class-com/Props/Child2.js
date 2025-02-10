import React, { Component } from 'react'

export class Child2 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={()=>this.props.test('child2 data')}>send data</button>
      </div>
    )
  }
}

export default Child2