import { AppDispatch } from '@/app/store';
import GalleryCaption from '@/features/gallery/GalleryCaption';
import GalleryItem from '@/features/gallery/GalleryItem';
import { fetchGalleryData } from '@/features/gallery/gallerySlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GalleryNavButton from './GalleryNavButton';
import { NextContainer, PrevContainer, StyledGallery } from './styles';

const Gallery = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGalleryData());
  }, [dispatch]);

  return (
    <StyledGallery>
      <GalleryItem />
      <GalleryCaption />
    </StyledGallery>
  );
};

export default Gallery;
