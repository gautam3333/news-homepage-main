import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <nav className='navigation_box'>
      <div>
        <Link to={'/'}>
          <img src='/images/logo.svg' alt='logo' className='logo_img' />
        </Link>
      </div>

      <div>
        <button
          className='hamburger_menu_button'
          onClick={() => setHamburger((hamburder) => !hamburder)}
        >
          {hamburger ? (
            <img src='/images/icon-menu-close.svg' alt='icon menu close' />
          ) : (
            <img src='/images/icon-menu.svg' alt='icon menu' />
          )}
        </button>
      </div>
      <ul
        className={hamburger ? 'navigation_routes_mobile' : 'navigation_routes'}
      >
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/new'}>New</NavLink>
        </li>
        <li>
          <NavLink to={'/popular'}>Popular</NavLink>
        </li>
        <li>
          <NavLink to={'/trending'}>Trending</NavLink>
        </li>
        <li>
          <NavLink to={'/categories'}>Categories</NavLink>
        </li>
      </ul>
    </nav>
  );
}
