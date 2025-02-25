import React, { Component } from 'react'
import Child from './Child'
import PureChild from './PureChild'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0,
      num: {value: 100}
    }
  }

  updateCount = () => {
    this.setState({
      count: this.state.count+1
      // count: this.state.count=0
    })
  }
  render() {
    console.log('parent render')
    return (
      <div>
        <h2>Parent: {this.state.count}</h2>
        <button onClick={this.updateCount}>update count</button>
        {/* <Child />
        <PureChild/> */}
        <Child num={this.state.num} />
        <PureChild num={this.state.num} />
      </div>
    )
  }
}

export default Parent