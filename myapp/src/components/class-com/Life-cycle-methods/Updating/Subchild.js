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
  shouldComponentUpdate(nextProps, nextState) {
    console.log('sub child should update')
    return true
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('sub child snapshot')
    return null
  }

  componentDidUpdate() {
    console.log('sub child did update')
  }

  render() {
    console.log('sub child render')
    return (
      <div>Subchild</div>
    )
  }
}

export default Subchild