import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/planet.png';

const NavBar = () => {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  const activeStyle = {
    textDecoration: 'underline',
  };

  const activeClassName = 'underline';

  return (
    <nav>
      <div>
        <NavLink
          to="/"
        >
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <h1>Space Travelers Hub</h1>
      </div>
      <ul>
        <li>
          <NavLink
            to="rockets"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="missions"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="myprofile">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                My Profile
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
