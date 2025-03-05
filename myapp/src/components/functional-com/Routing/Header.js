import React from 'react'
import './style.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header>
         <ul>
        <li>
            <NavLink to="/" style={({ isActive }) => {
              return isActive ? {color: 'blue'} : {color: 'yellow'}
          }}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products" style={({ isActive }) => {
              return isActive ? {color: 'blue'} : {color: 'yellow'}
            }}> Products </NavLink>
        </li>
      </ul>
      </header>
    </div>
  )
}

export default Header