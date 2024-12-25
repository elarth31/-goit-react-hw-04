import styles from './ImageCard.module.css';

const generateRandomNumber = () => Math.floor(Math.random() * 1000);

const ImageCard = ({
  alt_description,
  urls,
  likes,
  views,
  comments,
  downloads,
  updateModalStateData,
}) => {

  const randomLikes = generateRandomNumber();
  const randomViews = generateRandomNumber();
  const randomComments = generateRandomNumber();
  const randomDownloads = generateRandomNumber();

  return (
    <div
      className={styles.cardWrapper}
      onClick={() => updateModalStateData(urls.regular, alt_description)}
    >
      <img
        className={styles.cardImage}
        src={urls.small}
        alt={alt_description}
      />
      <p className={styles.cardDescription}>{alt_description || 'No description available'}</p>

  
      <div className={styles.imageDetails}>
        <div className={styles.detailBlock}>
          <h4>Likes</h4>
          <p>{likes || randomLikes}</p>
        </div>
        <div className={styles.detailBlock}>
          <h4>Views</h4>
          <p>{views || randomViews}</p>
        </div>
        <div className={styles.detailBlock}>
          <h4>Comments</h4>
          <p>{comments || randomComments}</p>
        </div>
        <div className={styles.detailBlock}>
          <h4>Downloads</h4>
          <p>{downloads || randomDownloads}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;