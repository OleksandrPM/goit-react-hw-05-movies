import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import NotFound from './NotFound/NotFound';
import MovieDetails from 'pages/MovieDetails';
import SharedLayout from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} /> */}
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
