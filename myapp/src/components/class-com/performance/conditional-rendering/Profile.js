// import React from 'react'

// function Profile(props) {
//   return (
//     <div>
//       <h3>Profile</h3>
//       <h4>Name: sachin</h4>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias assumenda neque atque amet ut debitis quam quo minima adipisci. Explicabo ipsum quas ex ipsam sint nesciunt reiciendis corrupti eligendi, nam dignissimos id, vel accusantium molestiae quasi porro. A dolor quas voluptas reprehenderit, fugit perferendis vitae consectetur, dolorem eveniet maxime libero sint excepturi esse magni dolorum veniam atque voluptatum, quae distinctio magnam adipisci vel suscipit. Quod consequuntur sed at, praesentium magnam quae voluptatibus quisquam accusantium, dolorem cumque omnis soluta tempore reprehenderit consectetur eaque dolor ex beatae amet maxime eligendi! Quas, laudantium? Quidem reiciendis quasi excepturi quaerat at quod, nihil fugiat! Enim.</p>
//       <button onClick={()=>props.setLogin(false)}>Logout</button>
//     </div>
//   )
// }

// export default Profile

import React, { Component } from 'react'

export class Profile extends Component {
  render() {
     return (
    <div>
      <h3>Profile</h3>
      <h4>Name: sachin</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias assumenda neque atque amet ut debitis quam quo minima adipisci. Explicabo ipsum quas ex ipsam sint nesciunt reiciendis corrupti eligendi, nam dignissimos id, vel accusantium molestiae quasi porro. A dolor quas voluptas reprehenderit, fugit perferendis vitae consectetur, dolorem eveniet maxime libero sint excepturi esse magni dolorum veniam atque voluptatum, quae distinctio magnam adipisci vel suscipit. Quod consequuntur sed at, praesentium magnam quae voluptatibus quisquam accusantium, dolorem cumque omnis soluta tempore reprehenderit consectetur eaque dolor ex beatae amet maxime eligendi! Quas, laudantium? Quidem reiciendis quasi excepturi quaerat at quod, nihil fugiat! Enim.</p>
      <button onClick={()=>this.props.setLogin(false)}>Logout</button>
    </div>
  )
  }
}

export default Profile