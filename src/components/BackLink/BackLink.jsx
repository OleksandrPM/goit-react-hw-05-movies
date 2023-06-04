import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
// import PropTypes from 'prop-types';
import scss from './BackLink.module.scss';

export default BackLink;

// BackLink.propTypes = {
//   backPath: PropTypes.object.isRequired,
// };

function BackLink({ backPath, children }) {
  return (
    <div className={scss.link}>
      <Link to={backPath}>
        <HiArrowLeft />
        {children}
      </Link>
    </div>
  );
}
