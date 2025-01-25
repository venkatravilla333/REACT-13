
// import Child from './components/functional-com/Child'
// import Parent  from './components/functional-com/Parent'
// import Parent  from './components/class-com/Parent'
// import Jsx from './components/functional-com/JSX/Jsx'

import A from "./components/functional-com/State/sync-data/localstate (state-lifting & props-drilling )/A"

// import Parent from "./components/functional-com/Props/Parent"


function App() {
  return (<div>
    <h2>App component</h2>
    {/* <Parent /> */}
    {/* {new Parent().render()} */}

    {/* {Jsx()} */}
    {/* <Jsx/> */}
    {/* <Parent/> */}
    <A/>
    </div>)
}

export default App