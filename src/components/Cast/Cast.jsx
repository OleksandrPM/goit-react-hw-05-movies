import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast, urlParams } from 'tmdbApi/tmdb-api';
import css from './Cast.module.css';
import defaultImage from '../../images/Cast/avatar.svg';

export default Cast;

function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  const updateCast = useCallback(() => {
    const { BASE_URL, PHOTO_SIZE } = urlParams;
    getCast(id)
      .then(data => {
        const actors = data.cast.map(
          ({ id, profile_path, name, character }) => {
            let imgUrl = '';
            if (profile_path !== null) {
              imgUrl = `${BASE_URL}${PHOTO_SIZE}${profile_path}`;
            } else {
              imgUrl = defaultImage;
            }

            return { id, imgUrl, name, character };
          }
        );
        setCast(actors);
      })
      .catch(error => console.log(error));
  }, [id]);

  useEffect(() => {
    updateCast();
  }, [updateCast]);

  return (
    <ul className={css.cast}>
      {cast.map(({ id, imgUrl, name, character }) => {
        return (
          <li key={id}>
            <img src={imgUrl} alt={`Img by ${name}`}></img>
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
