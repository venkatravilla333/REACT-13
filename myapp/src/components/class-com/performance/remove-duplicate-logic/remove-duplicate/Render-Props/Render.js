import React, { Component } from 'react'

export class Render extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  updateState = () => {
    this.setState({count: this.state.count+1})
  }
  render() {
    return this.props.test(this.state.count, this.updateState)
  }
}

export default Render