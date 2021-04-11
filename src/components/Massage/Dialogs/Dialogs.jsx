import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';

const Dialogs = (props) => {
   return (
      <div>
         <NavLink to={'/Massage/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
      </div>
   )
}
export default Dialogs;