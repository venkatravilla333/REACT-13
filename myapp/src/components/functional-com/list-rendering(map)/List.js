import React from 'react'

function List() {

  // let names = ['sachin', 'kohli', 'gill', 'rahul', 'dhoni']
  // let numbers = [1, 2, 3, 4, 5]
  let products = [
    { name: 'hp laptop', price: 40000, qty: 20 },
    { name: 'mobile', price: 20000, qty: 200 },
    { name: 'shirt', price: 400, qty: 40 },
    { name: 'book', price: 40, qty: 5 },
    { name: 'pen', price: 10, qty: 50 },
    
  ]
  

  return (
    <div style={{display:"flex", }}>
      {/* <h4>{names[0]}</h4>
      <h4>{names[1]}</h4>
      <h4>{names[2]}</h4>
      <h4>{names[3]}</h4>
      <h4>{names[4]}</h4> */}
      {
        products.map((product) => {
          return <div style={{ width:"200px", margin: "10px", padding: "8px", boxShadow: "3px 3px 10px black"}}>
                 <h4>name: {product.name}</h4>
                 <h4>price: {product.price}</h4>
                 <h4>qty: {product.qty}</h4>
                </div> 
        })
     
      }
    </div>
  )
}

export default List