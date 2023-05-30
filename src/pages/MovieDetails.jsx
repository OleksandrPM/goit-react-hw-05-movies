import { Link, Outlet, useParams } from 'react-router-dom';

export default MovieDetails;

function MovieDetails() {
  const id = useParams();

  return (
    <main>
      <h2>Movie Details Page</h2>
      <p>{id.movie_id}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
