import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import BackLink from 'components/BackLink';

export default MovieDetails;

function MovieDetails() {
  const id = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <BackLink backPath={backLinkHref}>Go back</BackLink>
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
