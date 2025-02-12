import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log('Parent contructor')
    // this.updateCount = this.updateCount.bind(this)
  }

  updateCount = ()=> {
    this.setState({
      count: this.state.count+1
    })
  }

  static getDerivedStateFromProps(props, state) {
    console.log('parent getderived')
     return {}
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('parent should update')
    return true
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('parent snapshot')
    return null
  }

  componentDidUpdate() {
    console.log('parent did update')
  }

  componentDidMount() {
    console.log('parent didmount')
  }
  render() {
    console.log('parent render')
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.updateCount}>update count</button>
        <Child/>
      </div>
    )
  }
}

export default Parent