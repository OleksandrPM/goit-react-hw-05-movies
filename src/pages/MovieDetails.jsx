import { useCallback, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import BackLink from 'components/BackLink';
import MovieCard from 'components/MovieCard';
import { getDetails } from 'tmdbApi/tmdb-api';

export default MovieDetails;

const BASE_URL = 'https://image.tmdb.org/t/p/';
const file_size = 'w500';

function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [details, setDetails] = useState({});

  const updateDetails = useCallback(() => {
    getDetails(id)
      .then(
        ({
          genres,
          overview,
          poster_path,
          release_date,
          title,
          vote_average,
        }) => {
          setDetails({
            imgSrc: `${BASE_URL}${file_size}${poster_path}`,
            title: title,
            releaseYear: release_date.slice(0, 4),
            score: Math.round(vote_average * 10),
            overview: overview,
            genres: getGenresString(genres),
          });
        }
      )
      .catch(error => console.log(error));
  }, [id]);

  useEffect(() => {
    updateDetails();
  }, [updateDetails]);

  return (
    <>
      <BackLink backPath={backLinkHref}>Go back</BackLink>
      <MovieCard details={details} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

function getGenresString(genres) {
  return genres.map(genre => genre.name).join(' ');
}
