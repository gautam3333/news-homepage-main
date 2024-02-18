import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='navigation_box'>
      <div>
        <Link to={'/'}>
          <img src='/images/logo.svg' alt='logo' className='logo_img' />
        </Link>
      </div>
      <ul className='navigation_routes'>
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
