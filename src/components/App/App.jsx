import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';

// import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';

export class App extends Component {
  state = {
    // gallery: [],
    // // showModal: false,
    // isLoading: false,
    // page: 1,
    // error: '',
    query: '',
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   try {
  //     const key = '30593721-3615c14b1fd526cc46c7cd9ff';
  //     const response = await axios.get(
  //       `${BASE_URL}/?key=${key}&q=${this.state.query}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`
  //     );

  //     this.setState({ gallery: response.data.hits });
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  componentDidUpdate = (prevProps, prevState) => {
    // console.log('gall', this.state.gallery);
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;

    return (
      <>
        <Container>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery query={query} />
        </Container>
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
