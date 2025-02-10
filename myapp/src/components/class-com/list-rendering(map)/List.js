import React, { Component } from 'react'

export class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      products: [
         {name: 'laptop', price: 40000},
         {name: 'mobile', price: 20000},
         {name: 'book', price: 100},
         {name: 'pen', price: 10}
       ]
    }
  }
  render() {
    return (
      <div>
        {/* {
          this.state.products.map((product) => {
            return <div style={{border:"2px solid black", width: "400px"}}>
              <h3>Name: {product.name}</h3>
              <h3>Price: {product.price}</h3>
            </div>
          })
        } */}
        {/* <h3>Name: {this.state.products[0].name}</h3>
        <h3>Price: {this.state.products[0].price}</h3>
        <h3>Name: {this.state.products[1].name}</h3>
        <h3>Price: {this.state.products[1].price}</h3>
        <h3>Name: {this.state.products[2].name}</h3>
        <h3>Price: {this.state.products[2].price}</h3>
        <h3>Name: {this.state.products[3].name}</h3>
        <h3>Price: {this.state.products[3].price}</h3> */}
      </div>
    )
  }
}

export default List