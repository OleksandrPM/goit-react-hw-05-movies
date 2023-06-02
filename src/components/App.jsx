import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Cast from './Cast';
import Reviews from './Reviews';
import NotFound from './NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
