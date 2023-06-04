import { InfinitySpin } from 'react-loader-spinner';
import scss from './Loader.module.scss';

export default Loader;

function Loader() {
  return (
    <div className={scss.infinity_spin}>
      <InfinitySpin width="200" />
    </div>
  );
}
