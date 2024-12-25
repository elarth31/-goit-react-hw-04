import { useEffect, useState, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css'; 
import fetchGalleryPhotos from './api/photos-api';

import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'; 
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [photosCollection, setPhotosCollection] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [totalPageCount, setTotalPageCount] = useState(0);

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [modalImageAlt, setModalImageAlt] = useState('');

  const scrollRef = useRef();

  useEffect(() => {
    if (searchQuery === '') return;

    const fetchImages = async () => {
      try {
        setLoadingState(true);
        setErrorState(false);
        const data = await fetchGalleryPhotos(searchQuery, currentPage);
        if (data.total === 0) {
          setErrorState('No images found.');
          return;
        }
        setPhotosCollection((prevPhotos) => [...prevPhotos, ...data.results]);
        setTotalPageCount(data.total_pages);
      } catch (error) {
        setErrorState('Failed to fetch images, please try again.');
        console.error('Error fetching images:', error); 
      } finally {
        setLoadingState(false);
      }
    };
    fetchImages();
  }, [currentPage, searchQuery]);

  const handleSearchSubmit = (newQuery) => {
    setSearchQuery(newQuery);
    setPhotosCollection([]);
    setCurrentPage(1);
  };

  const handleLoadMoreImages = () => {
    setCurrentPage(currentPage + 1);
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  const isLoadMoreDisabled = currentPage === totalPageCount;

  const openImageModal = () => {
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
  };

  const setModalData = (src, alt) => {
    setModalImageUrl(src);
    setModalImageAlt(alt);
  };

  return (
    <div ref={scrollRef}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {photosCollection.length > 0 && (
        <ImageGallery
          gallery={photosCollection}
          openModal={openImageModal}
          updateModalStateData={setModalData}
        />
      )}
      {loadingState && <Loader />}
      {errorState && <ErrorMessage />}
      {photosCollection.length > 0 && !loadingState && !errorState && (
        <LoadMoreBtn handleLoadMore={handleLoadMoreImages} isActive={isLoadMoreDisabled} />
      )}
      <ImageModal
        modalIsOpen={isModalVisible}
        closeModal={closeImageModal}
        src={modalImageUrl}
        alt={modalImageAlt}
      />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export default App;
