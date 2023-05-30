import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

function MoviesList({ movies = [] }) {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li className="movie" key={id}>
            <NavLink to={`/movies/${id}`}>{title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
