import { Suspense, lazy, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'tmdbApi/tmdb-api';
import scss from './Movies.module.scss';

const Searchbar = lazy(() => import('../../components/Searchbar'));
const MoviesList = lazy(() => import('../../components/MoviesList'));
const Loader = lazy(() => import('../../components/Loader'));

export default Movies;

const QUERY_NAME = 'query';

function Movies() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(QUERY_NAME) ?? '';

  useEffect(() => {
    setSearchedMovies([]);
    if (query !== '') {
      try {
        getMovies(query).then(data => {
          if (data.results.length !== 0) {
            const movies = data.results.map(({ id, poster_path, title }) => {
              return { id, poster_path, title };
            });
            setSearchedMovies(movies);
          } else {
            alert(`Movies by your request "${query}" did not found`);
            return;
          }
        });
      } catch (error) {
        console.log(`Error in Movies page during getMovies: ${error}`);
      }
    }
  }, [query]);

  const updateSearchParams = value => {
    const searchString = value.searchString;
    if (query !== searchString) {
      searchString !== ''
        ? setSearchParams({ [QUERY_NAME]: value.searchString })
        : setSearchParams({});
    } else {
      if (query !== '') {
        alert(`You are actually looking at "${value.searchString}" pictures`);
      }
    }
  };

  return (
    <>
      <Searchbar className={scss.searchbar} onSubmit={updateSearchParams} />
      <Suspense fallback={<Loader />}>
        {searchedMovies.length !== 0 && <MoviesList movies={searchedMovies} />}
      </Suspense>
    </>
  );
}
