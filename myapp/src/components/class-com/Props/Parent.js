import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
       name: 'sachin',
       data: ""
    }
  }
  test = (x)=> {
    console.log(x)
    console.log(this)
    this.state.name = this.state.name = 'kohli'
    // this.setState({data: x})
    console.log(this.state.name)
  }
  render() {
    return (
      <>
        <h3>Name: {this.state.name}</h3>
        <h3>Data: {this.state.data}</h3>
        <Child1 name={this.state.name} />
        <Child2 test={this.test} />
        <button onClick={this.test}>update data</button>
      </>
      
    )
  }
}

export default Parent