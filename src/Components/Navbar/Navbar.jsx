//& Import Scss
import './Navbar.scss';

//& Imports Modules
import { NavLink } from 'react-router-dom';

//& Import Routes
import { Router } from '../../Routes/Routes';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
      {Router.map(
          ({ id, isNav, name, mainPath }) =>
          isNav && (
              <li key={id}>
                <NavLink className={({ isActive }) => (isActive ? 'navbar__item navbar__item--active' : 'navbar__item')} to={mainPath}>
                  {name}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

