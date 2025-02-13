import React, { Component } from 'react'

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
        hasError: true
    }
  }

  componentDidCatch(error) {
    console.log(error)
  }
  render() {
  return this.state.hasError ? "something went wrong age must be >=18" : this.props.children
  }
}

export default ErrorBoundry