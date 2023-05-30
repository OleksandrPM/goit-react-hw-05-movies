import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from './NotFound/NotFound';
import MovieDetails from 'pages/MovieDetails';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movie_id" element={<MovieDetails />}>
            {/* <Route path="cast" element={<Cast />} /> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
