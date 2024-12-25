import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ gallery, openModal, updateModalStateData }) => {
    
  return (
    <ul className={styles.itemsContainer}>
      {gallery.map(({ id, alt_description, urls, likes, views, comments, downloads }) => (
        <li className={styles.cardItem} key={id} onClick={openModal}>
          <ImageCard
            urls={urls}
            alt_description={alt_description}
            likes={likes}
            views={views}
            comments={comments}
            downloads={downloads}
            updateModalStateData={updateModalStateData}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
