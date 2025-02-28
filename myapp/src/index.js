

import  reactdom  from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

let div = document.getElementById('root')

let root = reactdom.createRoot(div)

root.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
)