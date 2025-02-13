import React, { Component } from 'react'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      x: 0,
      y: 0
    }
  }

  updateState = (e) => {
    console.log('state update')
    this.setState({
      x: e.clientX,
      y: e.clientY

    })
  }
  componentDidMount() {
    console.log('did mount')
    window.addEventListener('mousemove', this.updateState)
  }

  componentWillUnmount() {
    console.log('cleanup')
    window.removeEventListener('mousemove', this.updateState)
  }
  render() {
    console.log('render')
    return (
      <div>
        <h3>X: {this.state.x}</h3>
        <h3>Y: {this.state.y}</h3>
      </div>
    )
  }
}

export default Parent