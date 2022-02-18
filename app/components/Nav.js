import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px'
}

export default function Nav(){
    return (
      <div className="nav" style={styles}>
        <div className="max-width horizontal left">
          <NavLink to="/" className="nav-link">
            Top
          </NavLink>
          <NavLink to="/battle" className="nav-link">
            New
          </NavLink>
        </div>
      </div>
    );
}