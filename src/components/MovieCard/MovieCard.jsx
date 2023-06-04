import PropTypes from 'prop-types';
import Image from 'components/Image';
import scss from './MovieCard.module.scss';

export default MovieCard;

MovieCard.propTypes = {
  details: PropTypes.object.isRequired,
};

function MovieCard({ details }) {
  const {
    imgSrc = '',
    title = 'Title',
    releaseYear = 'n/a',
    score,
    overview,
    genres,
  } = details;

  return (
    <div className={scss.card}>
      <Image URL={imgSrc} tags={`Poster "${title}"`} />

      <div className={scss.about}>
        <h2>{`${title} (${releaseYear})`}</h2>
        <p className={scss.score}>{`User Score: ${score}%`}</p>
        <h3>Overview</h3>
        <article>{overview}</article>
        <h4>Genres</h4>
        <p>{genres}</p>
      </div>
    </div>
  );
}
