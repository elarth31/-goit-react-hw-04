import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = ({ size = 80, color = '#646cff' }) => {
  return (
    <div className={styles.loader}>
      <ThreeDots
        visible={true}
        height={size}
        width={size}
        color={color}
        radius="9"
        ariaLabel="three-dots-loading"
        role="status"
      />
    </div>
  );
};

export default Loader;

