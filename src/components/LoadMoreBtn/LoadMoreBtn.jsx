import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleLoadMore, isActive }) => {
  return (
    <button
      onClick={handleLoadMore}
      type='button'
      disabled={isActive}
      className={`${styles.loadMoreBtn} ${isActive ? styles.disabled : ''}`}
    >
      {isActive ? 'No more images' : 'Load more'}
    </button>
  );
};

export default LoadMoreBtn;
