import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import BackLink from 'components/BackLink';
import MovieCard from 'components/MovieCard';
import Image from 'components/Image';
import { getDetails } from 'tmdbApi/tmdb-api';

export default MovieDetails;

const BASE_URL = 'https://image.tmdb.org/t/p/';
const file_size = 'w500';
const alternativeImage =
  'https://pixabay.com/vectors/cutting-editing-filmstrip-150066/';

function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [imgSrc, setImgSrc] = useState(alternativeImage);
  const [title, setTitle] = useState('n/a');
  const [releaseYear, setReleaseYear] = useState('n/a');
  const [score, setScore] = useState('n/a');
  const [overview, setOverview] = useState('n/a');
  const [genres, setGenres] = useState('n/a');

  const movieId = useRef(id);

  const updateDetails = useCallback(() => {
    getDetails(movieId.current)
      .then(
        ({
          genres,
          overview,
          poster_path,
          release_date,
          title,
          vote_average,
        }) => {
          setImgSrc(`${BASE_URL}${file_size}${poster_path}`);
          setTitle(title);
          setReleaseYear(release_date.slice(0, 4));
          setScore(Math.round(vote_average * 10));
          setOverview(overview);
          setGenres(getGenresString(genres));
        }
      )
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    updateDetails();
  }, [updateDetails]);

  return (
    <>
      <BackLink backPath={backLinkHref}>Go back</BackLink>
      <MovieCard
        details={{ imgSrc, title, releaseYear, score, overview, genres }}
      />

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
