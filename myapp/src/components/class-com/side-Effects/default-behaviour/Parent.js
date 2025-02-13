import React, { Component } from 'react'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      normalCount: 0,
      domCount: 0
    }
  }

  componentDidMount() {
    console.log('didmount')
    document.title = this.state.domCount
  }
  
  componentDidUpdate() {
    console.log('didupdate')
    document.title = this.state.domCount
  }

  updateNormalCount = ()=> {
    this.setState({
      normalCount: this.state.normalCount+1
    })
  }

  updateDomCount = () => {
    this.setState({
      domCount: this.state.domCount+1
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>Normal count: {this.state.normalCount}</h2>
        <button onClick={this.updateNormalCount}>update normal count</button>
        <h2>Dom count: {this.state.domCount}</h2>
        <button onClick={this.updateDomCount}>update dom count</button>
      </div>
    )
  }
}

export default Parent