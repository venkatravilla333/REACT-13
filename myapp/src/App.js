
import Child from './components/functional-com/Child'
// import Parent  from './components/functional-com/Parent'
import Parent  from './components/class-com/Parent'

function App() {
  return (<div>
    <h2>App component</h2>
    {/* <Parent /> */}
    {new Parent().render()}
    
    </div>)
}

export default App