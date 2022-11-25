import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [showModal, setShowModal] = useState(false);
  // state = {
  //   showModal: false,
  // };

  const toggleModal = () => {
    setShowModal(prev => !prev);
    // this.setState(({ showModal }) => ({
    //   showModal: !showModal,
    // }));
  };

  // const { webformatURL, largeImageURL, tags } = this.props;
  // const { showModal } = this.state;
  return (
    <>
      <GalleryItem className="gallery-item">
        <ImageGallery src={webformatURL} alt={tags} onClick={toggleModal} />
      </GalleryItem>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

// export class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { webformatURL, largeImageURL, tags } = this.props;
//     const { showModal } = this.state;
//     return (
//       <>
//         <GalleryItem className="gallery-item">
//           <ImageGallery
//             src={webformatURL}
//             alt={tags}
//             onClick={this.toggleModal}
//           />
//         </GalleryItem>
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={largeImageURL} alt={tags} />
//           </Modal>
//         )}
//       </>
//     );
//   }
// }
