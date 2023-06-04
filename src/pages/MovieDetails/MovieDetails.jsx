import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getDetails } from 'tmdbApi/tmdb-api';
import scss from './MovieDetails.module.scss';
import { HiArrowRight } from 'react-icons/hi';
import alternativeImage from '../../images/cut_film.svg';

export default MovieDetails;

const BackLink = lazy(() => import('../../components/BackLink'));
const MovieCard = lazy(() => import('../../components/MovieCard'));
const Loader = lazy(() => import('../../components/Loader'));

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
          let imgUrl;
          if (poster_path === null) {
            imgUrl = alternativeImage;
          } else {
            imgUrl = `${BASE_URL}${file_size}${poster_path}`;
          }
          setDetails({
            imgSrc: imgUrl,
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
      <div className={scss.backlink}>
        <BackLink backPath={backLinkHref}>Go back</BackLink>
      </div>

      <div className={scss.card}>
        <MovieCard details={details} />
      </div>

      <div className={scss.subnav}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">
              <HiArrowRight />
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews">
              <HiArrowRight />
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

function getGenresString(genres) {
  return genres.map(genre => genre.name).join(' ');
}
