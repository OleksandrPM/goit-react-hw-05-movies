import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../images/tmdb-logo.svg';

export const SharedLayout = () => {
  return (
    <div className="container">
      <header>
        <p>
          <ReactLogo width="10%" />
          Movies
        </p>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
