import { Suspense, lazy } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import scss from './SharedLayout.module.scss';
import logo from '../../images/tmdb-logo.svg';

export default SharedLayout;

const Loader = lazy(() => import('../Loader'));

function SharedLayout() {
  return (
    <div>
      <header className={scss.head}>
        <div className={scss.container}>
          <div className={scss.logo}>
            <img src={logo} alt="TMDB logo" className={scss.logo_img}></img>
            <p className={scss.name}>Movies</p>
          </div>
          <nav>
            <ul className={scss.nav_list}>
              <li>
                <NavLink to="/" end className={scss.navlink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies" className={scss.navlink}>
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className={scss.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
