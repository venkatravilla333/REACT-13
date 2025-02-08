import React, { Component } from "react";
import Destructure from "./Destructure";


class Parent extends Component{
  constructor() {
    super()
    this.state = {
      count: 0
    }
    // this.increaseCount = this.increaseCount.bind(this)
  }

  increaseCount = ()=> {
    console.log(this)
    this.setState({count: this.state.count+1})
  }

  render() {
    console.log(this)
    let {count} = this.state
    return <React.Fragment>
      {/* <h2>Class com : {this.state.count}</h2>
      <h2>Class com : {this.state.count}</h2>
      <h2>Class com : {this.state.count}</h2>
      <h2>Class com : {this.state.count}</h2> */}
      <h2>Class com : {count}</h2>
       <button onClick={this.increaseCount}>update count</button>
      {/* <button onClick={()=>this.setState({count: this.state.count+1})}>update count</button> */}
      <Destructure count={count} />
    </React.Fragment> 
   }
}

export default Parent