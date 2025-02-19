import React, { Component } from 'react'

export class Dom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.inputRef = React.createRef()
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    this.inputRef.current.focus()
    console.log(this.inputRef.current)
  }

  getValue ()  {
    this.setState({
      name: this.inputRef.current.value
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.getValue}>get value</button>
      </div>
    )
  }
}

export default Dom