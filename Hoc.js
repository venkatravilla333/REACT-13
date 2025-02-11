import React, { Component } from "react";


var Hoc = (Original) => {
  class NewCom extends Component{
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
      return <Original count={this.state.count} updateState={this.updateState } />
    }
  }
  return NewCom
}

export default Hoc