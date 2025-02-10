
// import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

// function Condtion() {
//   let [login, setLogin] = useState(true)
 
    
  // if (login) {
  //   return <Profile setLogin={setLogin} />
  // } else {
  //   return <Login setLogin={setLogin} />
  // }

  // return (<div>
  //        {login ? <Profile setLogin={setLogin} /> : <Login setLogin={setLogin} />}
  //       </div> 
  // )
  // return (<div>
  //        {login && <Profile setLogin={setLogin} />}
  //       </div>
  // )
// }

// export default Condtion

import React, { Component } from 'react'

export class Condtion extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       login: false
    }
  }

  updateState = (data) => {
    this.setState({
      login: data
    })
  }
  render() {
     return (<div>
         {this.state.login ? <Profile setLogin={this.updateState} /> : <Login setLogin={this.updateState} />}
        </div> )
  }
}

export default Condtion