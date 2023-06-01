import PropTypes from 'prop-types';
import Image from 'components/Image';
import css from './MovieCard.module.css';

export default MovieCard;

MovieCard.propTypes = {
  details: PropTypes.object.isRequired,
};

function MovieCard({ details }) {
  const { imgSrc, title, releaseYear, score, overview, genres } = details;
  return (
    <div className={css.card}>
      <Image URL={imgSrc} tags={`Poster "${title}"`} />

      <div className="about">
        <h2>{`${title} (${releaseYear})`}</h2>
        <p>{`User Score: ${score}%`}</p>
        <h3>Overview</h3>
        <article>{overview}</article>
        <b>Genres</b>
        <p>{genres}</p>
      </div>
    </div>
  );
}
