import React from 'react';
import s from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
   return (
      <div className={s.navBar}>
         <div><NavLink to='/Profile'>Profile</NavLink></div>
         <div><NavLink to='/Massage'>Massage</NavLink></div>
      </div>
   )
}
export default NavBar;