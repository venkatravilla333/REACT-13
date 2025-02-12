import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
   console.log('Parent contructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('parent getderived')
     return {}
  }

  componentDidMount() {
    console.log('parent didmount')
  }
  render() {
    console.log('parent render')
    return (
      <div>
        <Child/>
      </div>
    )
  }
}

export default Parent