import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
// import PropTypes from 'prop-types';
import css from './BackLink.module.css';

export default BackLink;

// BackLink.propTypes = {
//   backPath: PropTypes.object.isRequired,
// };

function BackLink({ backPath, children }) {
  return (
    <Link className={css.link} to={backPath}>
      <HiArrowLeft />
      {children}
    </Link>
  );
}
