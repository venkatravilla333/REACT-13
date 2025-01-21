
import Child from './components/functional-com/Child'
// import Parent  from './components/functional-com/Parent'
import Parent  from './components/class-com/Parent'
import Jsx from './components/functional-com/JSX/Jsx'

function App() {
  return (<div>
    <h2>App component</h2>
    {/* <Parent /> */}
    {new Parent().render()}

    {/* {Jsx()} */}
    <Jsx/>
    </div>)
}

export default App