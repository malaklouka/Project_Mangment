import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css'


const Navbar = () => {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
  return (
<div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            ProjectManagement
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/admins"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Admins List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/users"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Users List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/tasks"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Tasks
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>  )
}

export default Navbar