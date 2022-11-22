import { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import { GalleryList, Container } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
// import ApiServise from './api-servise';
const BASE_URL = 'https://pixabay.com/api';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    page: 1,
    error: null,
    status: 'idle',
  };

  fetchPhotos = page => {
    const key = '30593721-3615c14b1fd526cc46c7cd9ff';
    return axios.get(
      `${BASE_URL}/?key=${key}&q=${this.props.query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
    );
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { page } = this.state;
    if (prevProps.query !== this.props.query) {
      this.setState({
        status: 'pending',
        gallery: [],
      });

      this.fetchPhotos(page);

      try {
        // const key = '30593721-3615c14b1fd526cc46c7cd9ff';
        // const response = await axios.get(
        //   `${BASE_URL}/?key=${key}&q=${this.props.query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
        // );

        const response = await this.fetchPhotos(page);

        if (response.data.hits.length === 0) {
          throw new Error(`Not found ${this.props.query}`);
        }

        this.setState({
          status: 'resolve',
          gallery: response.data.hits,
        });
      } catch (error) {
        toast.error(error.message);
        this.setState({ error, status: 'rejected' });
      }
    } else if (prevState.page !== this.state.page) {
      try {
        // const key = '30593721-3615c14b1fd526cc46c7cd9ff';
        // const response = await axios.get(
        //   `${BASE_URL}/?key=${key}&q=${this.props.query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
        // );

        const response = await this.fetchPhotos(page);

        if (response.data.hits.length === 0) {
          throw new Error(`Not found ${this.props.query}`);
        }

        this.setState(({ gallery, status }) => ({
          status: 'resolve',
          gallery: [...gallery, ...response.data.hits],
        }));
      } catch (error) {
        toast.error(error.message);
        this.setState({ error, status: 'rejected' });
      }
    }
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { gallery, status } = this.state;
    const renderContent = () => {
      if (status === 'pending') {
        return <Loader />;
      }

      if (status === 'resolve') {
        return (
          <>
            <GalleryList>
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
            <Button onClickHandle={this.onLoadMore}>Load More</Button>
          </>
        );
      }
    };

    console.log('galler', gallery);
    return (
      <Container>
        {renderContent()}
        {/* <GalleryList>
          {gallery.length > 0 &&
            gallery.map(({ largeImageURL, webformatURL, id, tags }) => (
              <ImageGalleryItem
                key={id}
                tags={tags}
                largeImageURL={largeImageURL}
                webformatURL={webformatURL}
              />
            ))}
        </GalleryList> */}
        {/* {isLoading && <Loader />}
        {!isLoading && gallery.length > 0 && (
          
        )} */}
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
