import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(){
    return (
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/" className="nav-link">Top</NavLink>
            <NavLink to="/battle" className="nav-link">New</NavLink>
          </li>
        </ul>
      </div>
    );
}