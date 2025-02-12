import React, { Component } from 'react'

export class Subchild extends Component {
  constructor(props) {
    super(props)
    this.state = {}
   console.log('sub child constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('sub child getderived')
     return {}
  }
   componentDidMount() {
    console.log('sub child didmount')
  }

  render() {
    console.log('sub child render')
    return (
      <div>Subchild</div>
    )
  }
}

export default Subchild