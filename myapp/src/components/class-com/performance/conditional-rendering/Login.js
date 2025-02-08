import React from 'react'

function Login(props) {
  return (
    <div style={{border: "2px solid black", width:"400px", padding:"20px"}}>
      <div>
      <label htmlFor="">Email</label>
      <input type="email" />
      </div>
      <div>
      <label htmlFor="">Password</label>
      <input type="password" />
      </div>
      <button type='submit' onClick={()=>props.setLogin(true)}>Login</button>
    </div>
  )
}

export default Login