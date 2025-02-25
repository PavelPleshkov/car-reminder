import s from './NavButton.module.scss';

import { NavLink } from 'react-router-dom';


function NavButton({text, path, className}) {

  return (
    // <button className={s.button + ' ' + className} onClick={onClick}>{text}</button>
    <NavLink to={path} className={s.button + ' ' + className}>{text}</NavLink>
  )
}


export default NavButton;