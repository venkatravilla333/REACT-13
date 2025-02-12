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