import React from 'react'
import { NavLink } from 'react-router-dom'
import {ThemeConsumer} from '../contexts/theme'

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px'
}

const activeStyle = {
  opacity: '0.5',
};

export default function Nav(){
    return (
      <ThemeConsumer>
        {({ theme, toggleTheme }) => (
          <div className="nav" style={styles}>
            <div className="max-width horizontal left">
              <NavLink
                to="/"
                className={`nav-link ${theme}`}
                style={({ isActive }) => (isActive ? undefined : activeStyle)}
              >
                Top
              </NavLink>
              <NavLink
                to="/new"
                className={`nav-link ${theme}`}
                style={({ isActive }) => (isActive ? undefined : activeStyle)}
              >
                New
              </NavLink>
              <button className="theme-toggler" onClick={toggleTheme}>
                {theme === 'light' ? '🔦' : '💡'}
              </button>
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
}