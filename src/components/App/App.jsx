import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import * as API from '../../services/api';
import { Status } from 'constants/fetch-status';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState(Status.Idle);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalImg, setTotalImg] = useState(0);

  useEffect(() => {
    if (gallery.length > 0) {
      const element = document.getElementById('loadMore');
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().height + 100,
          left: 100,
          behavior: 'smooth',
        });
      }
    }
  }, [gallery]);

  const fetchPhotos = async params => {
    setStatus(Status.Loading);
    try {
      setPage(1);
      const resPhotos = await API.getPtotos(params);
      console.log('resPhotos1', resPhotos);
      if (resPhotos.hits.length === 0) {
        toast.error('Nothing found for your request');
        throw new Error('Nothing found for your request');
      }
      setStatus(Status.Success);
      setGallery(resPhotos.hits);
      setTotalImg(resPhotos.totalHits);
      toast.success(`${resPhotos.totalHits} images found for your request`);
    } catch (error) {
      setStatus(Status.Error);
      toast.error(error);
    }
  };

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchPhotos({ q: search });
  };

  const handleLoadMore = async () => {
    setStatus(Status.Loading);

    try {
      setPage(prev => prev + 1);
      const resPhotos = await API.getPtotos({ page: page + 1, q: search }); // content of page 2
      setGallery(prev => [...prev, ...resPhotos.hits]);
      setStatus(Status.Success);
    } catch (error) {
      console.log('error', error);
      setStatus(Status.Error);
      toast.error(error);
    }
  };

  return (
    <>
      <Container>
        <Searchbar
          search={search}
          onChangeSearch={handleChange}
          onSubmitSearch={handleSubmit}
        />
        <ImageGallery
          onLoadMore={handleLoadMore}
          search={search}
          gallery={gallery}
          totalImg={totalImg}
          status={status}
        />
      </Container>
      <ToastContainer autoClose={3000} />
    </>
  );
};

// export class App extends Component {
//   state = {
//     gallery: [],
//     status: Status.Idle,
//     search: '',
//     page: 1,
//     totalImg: 0,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const { gallery } = this.state;
//     if (prevState.gallery.length !== gallery.length) {
//       const element = document.getElementById('loadMore');
//       if (element) {
//         window.scrollTo({
//           top: element.getBoundingClientRect().height + 100,
//           left: 100,
//           behavior: 'smooth',
//         });
//       }
//     }
//   }

//   fetchPhotos = async params => {
//     this.setState({ status: Status.Loading });
//     try {
//       this.setState({ page: 1 });
//       const resPhotos = await API.getPtotos(params);
//       this.setState({
//         gallery: resPhotos.hits,
//         status: Status.Success,
//         totalImg: resPhotos.total,
//       });
//     } catch (error) {
//       this.setState({ status: Status.Error });
//     }
//   };

//   handleChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { search } = this.state;
//     this.fetchPhotos({ q: search });
//   };

//   handleLoadMore = async () => {
//     const { search, page } = this.state;
//     this.setState({ status: Status.Loading });
//     try {
//       this.setState(prevState => ({
//         page: prevState.page + 1,
//       }));
//       const resPhots = await API.getPtotos({ page: page + 1, q: search }); // content of page 2
//       this.setState(({ gallery }) => ({
//         gallery: [...gallery, ...resPhots.hits],
//         totalImg: resPhots.total,
//         status: Status.Success,
//       }));
//     } catch (error) {
//       this.setState({ status: Status.Error });
//     }
//   };

//   render() {
//     const { search, gallery, totalImg, status } = this.state;

//     return (
//       <>
//         <Container>
//           {/* <Searchbar onSubmitSearch={this.handleFormSubmit} onChangeSearch={ } search={ search} /> */}
//           <Searchbar
//             search={search}
//             onChangeSearch={this.handleChange}
//             onSubmitSearch={this.handleSubmit}
//           />
//           <ImageGallery
//             onLoadMore={this.handleLoadMore}
//             search={search}
//             gallery={gallery}
//             totalImg={totalImg}
//             status={status}
//           />
//         </Container>
//         <ToastContainer autoClose={3000} />
//       </>
//     );
//   }
// }
