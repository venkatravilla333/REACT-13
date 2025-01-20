

import  reactdom  from 'react-dom/client'
import App from './App'

let div = document.getElementById('root')

let root = reactdom.createRoot(div)

root.render(<App/>)