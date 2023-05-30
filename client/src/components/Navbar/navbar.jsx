import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
    <li><Link to='/'>home</Link></li>
    <li><Link to='/add'>add</Link></li>
    

    </ul>
  )
}

export default Navbar
