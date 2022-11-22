import { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { GalleryList, Container } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import * as API from '../services/api';

const BASE_URL = 'https://pixabay.com/api';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
    page: 1,
    error: null,
    totalImg: 0,
  };

  fetchPhotos = page => {
    const key = '30593721-3615c14b1fd526cc46c7cd9ff';
    return axios.get(
      `${BASE_URL}/?key=${key}&q=${this.props.query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
    );
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { page, gallery } = this.state;
    const { query } = this.props;

    if (prevProps.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        if (prevProps.query !== query) {
          this.setState({ gallery: [] });
        }

        const response = await API.searchPtotos(query, page);

        if (response.hits.length === 0) {
          throw new Error(`Not found ${this.props.query}`);
        }

        if (prevProps.query !== query) {
          this.setState({
            gallery: response.hits,
            totalImg: response.total,
          });
          toast.success(`${response.total} photos were found for your request`);
        } else {
          this.setState(({ gallery }) => ({
            gallery: [...gallery, ...response.hits],
            totalImg: response.total,
          }));
        }
      } catch (error) {
        toast.error(error.message);
        this.setState({
          error,
          isLoading: false,
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
    // Add scroll to last photo
    if (prevState.gallery.length !== gallery.length) {
      const element = document.getElementById('loadMore');
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().height + 100,
          left: 100,
          behavior: 'smooth',
        });
      }
    }
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { gallery, isLoading, totalImg } = this.state;
    const isShowBtn = gallery.length < totalImg;

    return (
      <Container>
        <GalleryList id="loadMore">
          {gallery.length > 0 &&
            gallery.map(({ largeImageURL, webformatURL, id, tags }) => (
              <ImageGalleryItem
                key={id}
                tags={tags}
                largeImageURL={largeImageURL}
                webformatURL={webformatURL}
              />
            ))}
        </GalleryList>
        {isLoading && <Loader />}
        {!isLoading && isShowBtn && (
          <Button onClickHandle={this.onLoadMore}>Load More</Button>
        )}
      </Container>
    );
  }
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
