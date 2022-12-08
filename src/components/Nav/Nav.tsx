import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Nav = () => {
  return (
    <div className="nav__container">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/skills">Skills</Link></li>
        </ul>
    </div>
  )
}

export default Nav