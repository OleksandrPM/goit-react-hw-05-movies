import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTMDBResponse, requestParametersMovie } from 'tmdbApi/tmdb-api';
import Searchbar from 'components/Searchbar';
import MoviesList from 'components/MoviesList';

export default Movies;

const QUERY_NAME = 'query';

function Movies() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(QUERY_NAME) ?? '';

  useEffect(() => {
    setSearchedMovies([]);
    if (query !== '') {
      requestParametersMovie.queries.query = query;
      try {
        getTMDBResponse(requestParametersMovie).then(data => {
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
        // setError(error);
      } finally {
        // setIsLoading(false);
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
    <main>
      <h2>Movies Page</h2>
      <Searchbar onSubmit={updateSearchParams} />
      {searchedMovies.length !== 0 && <MoviesList movies={searchedMovies} />}
    </main>
  );
}
