import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/players" className = { navData => navData.isActive ? classes.active : classes.item }>Playes</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/teams"  className = { navData => navData.isActive ? classes.active : classes.item }>Teams</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;