import React, { PureComponent } from 'react'

export class PureChild extends PureComponent {
  render() {
    console.log(this.props.num)
    console.log('pure component')
    return (
      <div>PureChild: {this.props.num.value}</div>
    )
  }
}

export default PureChild