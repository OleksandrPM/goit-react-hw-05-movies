import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { getTrending } from 'tmdbApi/tmdb-api';

export default Home;

function Home() {
  const [trendingList, setTrending] = useState([]);

  useEffect(() => {
    try {
      getTrending().then(data => {
        const trending = data.results.map(
          ({ backdrop_path, id, poster_path, title }) => {
            return { backdrop_path, id, poster_path, title };
          }
        );
        setTrending(trending);
      });
    } catch (error) {
      // setError(error);
    } finally {
      // setIsLoading(false);
    }
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {trendingList.length === 0 ? (
        <h2>Something going wrong...</h2>
      ) : (
        <MoviesList movies={trendingList} />
      )}
    </>
  );
}
