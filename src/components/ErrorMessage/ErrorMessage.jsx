import { AiFillWarning } from 'react-icons/ai'; 
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={styles.errorContainer}>
       <AiFillWarning className={styles.errorIcon} aria-label="Warning: Error occurred" /> 
      <p className={styles.errorText}>
        Something went wrong, please reload your page!
      </p>
    </div>
  );
};

export default ErrorMessage;

