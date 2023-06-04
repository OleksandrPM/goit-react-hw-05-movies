import PropTypes from 'prop-types';
import scss from './Searchbar.module.scss';

export default Searchbar;

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

function Searchbar({ onSubmit }) {
  const onSearchSubmit = event => {
    event.preventDefault();
    const searchString = event.currentTarget.elements.search.value
      .trim()
      .toLowerCase();
    onSubmit({ searchString });
  };

  return (
    <form className={scss.form} onSubmit={onSearchSubmit}>
      <button type="submit" className={scss.button}>
        <span className={scss.button_label}>Search</span>
      </button>

      <input
        className={scss.input}
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
}
