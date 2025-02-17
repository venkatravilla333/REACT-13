import React from 'react'

import './style.css'
import reactdom from 'react-dom'

function Modal(props) {
 return reactdom.createPortal( <div className='modal-overlay'>
      <div className='content'>
        <h2>Modal Title</h2>
        <p>Modal body
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam suscipit reiciendis amet cumque, adipisci laboriosam rerum, minus rem cum dicta quasi expedita ullam dolore nihil placeat molestias necessitatibus ut nesciunt.
     </p>
     <h3>Age: {props.age}</h3>
        <button onClick={props.toggelDisplay}>close modal</button>
      </div>
      
    </div>, document.getElementById('portal-root'))
  
}

export default Modal