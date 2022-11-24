import { Component } from 'react';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import { Status } from 'constants/fetch-status';
import { GalleryList, Container } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
// import * as API from '../../services/api';

export const ImageGallery = ({ status, gallery, onLoadMore, totalImg }) => {
  const isShowBtn = gallery.length < totalImg;

  return (
    <Container>
      <GalleryList id="loadMore">
        {gallery.length > 0 &&
          gallery.map(({ largeImageURL, webformatURL, id, tags }) => (
            <ImageGalleryItem
              key={`${id}-${tags}`}
              tags={tags}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
            />
          ))}
      </GalleryList>
      {status === Status.Loading && <Loader />}
      {status === Status.Success && isShowBtn && (
        <Button onClickHandle={onLoadMore}>Load More</Button>
      )}
    </Container>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  status: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  totalImg: PropTypes.node.isRequired,
};
