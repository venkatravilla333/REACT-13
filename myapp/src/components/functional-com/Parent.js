import Child from "./Child"


function Parent() {
  let x = 100
  return <div>
    <h2>This is parent component : {x}</h2>
    <Child data={x} />
    
  </div>
}

export default Parent