

function Child(props) {
  let y = 200
  console.log(props.data)
  return <h2>This is child com : {props.data}, data: {y}</h2>
}

export default Child