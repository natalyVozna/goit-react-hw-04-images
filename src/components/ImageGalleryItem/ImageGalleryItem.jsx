import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <GalleryItem className="gallery-item">
          <ImageGallery
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
          />
        </GalleryItem>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
