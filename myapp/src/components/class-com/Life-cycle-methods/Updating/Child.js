import React, { Component } from 'react'
import Subchild from './Subchild'

export class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    console.log('child constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('child getderived')
     return {}
  }
   componentDidMount() {
    console.log('child didmount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('child should update')
    return true
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('child snapshot')
    return null
  }

  componentDidUpdate() {
    console.log('child did update')
  }
  render() {
    console.log('child render')
    return (
      <div>
        <Subchild/>
      </div>
    )
  }
}

export default Child