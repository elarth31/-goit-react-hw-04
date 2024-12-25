import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ modalIsOpen, closeModal, src, alt }) => {
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			className={styles.modal}
            overlayClassName={styles.overlay}
		>
			<button onClick={closeModal} className={styles.closeButton}>
        <AiOutlineClose className={styles.closeIcon} />
      </button>
			<div>
				<img className={styles.modalImg} src={src} alt={alt} />
				<p className={styles.modalText}>{alt}</p>
			</div>
		</Modal>
	);
};

export default ImageModal;
