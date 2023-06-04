import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import scss from './MoviesList.module.scss';

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

function MoviesList({ movies = [] }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li className={scss.movie} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
