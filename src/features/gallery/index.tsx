import { AppDispatch } from '@/app/store';
import GalleryFooter from '@/features/gallery/GalleryFooter';
import GalleryItem from '@/features/gallery/GalleryItem';
import {
  fetchGalleryData,
  nextItem,
  previousItem,
} from '@/features/gallery/gallerySlice';
import screens from '@/screens';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import GalleryNavButton from './GalleryNavButton';

const StyledGallery = styled.div`
  flex: 1 1;
  display: grid;
  grid-template-areas:
    'view view view'
    'view view view'
    'prev details next';
  padding: 0 10vw;

  @media only screen and (max-width: ${screens.mobileMax}) {
    grid-template-areas:
      'details details details'
      'view view view'
      'prev . next';

    grid-template-rows: 1fr 4fr 2fr;
    grid-gap: 0;
  }
`;

const Gallery = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleNext = () => {
    dispatch(nextItem());
  };

  const handlePrevious = () => {
    dispatch(previousItem());
  };

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  return (
    <StyledGallery>
      <GalleryItem />
      <GalleryFooter />
      <GalleryNavButton style={{ gridArea: 'prev' }} onClick={handlePrevious}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </GalleryNavButton>
      <GalleryNavButton style={{ gridArea: 'next' }} onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </GalleryNavButton>
    </StyledGallery>
  );
};

export default Gallery;
