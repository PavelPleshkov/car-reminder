import s from './Header.module.scss';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={s.header}>
        <h1>Car reminder</h1>
        <nav className={s.nav}>
          <NavLink to='/car-reminder/home' className={({isActive})=> isActive ? s.link + ' ' + s.active : s.link}>Home</NavLink>
          <NavLink to='/car-reminder/work' className={({isActive})=> isActive ? s.link + ' ' + s.active : s.link}>Work</NavLink>
          <NavLink to='/car-reminder/info' className={({isActive})=> isActive ? s.link + ' ' + s.active : s.link}>Info</NavLink>
        </nav>
      </header>
  )
}

export default Header;