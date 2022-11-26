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
  const [loadMore, setLoadMore] = useState(false);
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

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchPhotos = async params => {
      const { q, page } = params;

      setStatus(Status.Loading);
      try {
        let resPhotos = null;
        if (loadMore) {
          resPhotos = await API.getPtotos({ q, page });
          setGallery(prev => [...prev, ...resPhotos.hits]);
        } else {
          resPhotos = await API.getPtotos({ q, page: 1 });
          setGallery(resPhotos.hits);
          setTotalImg(resPhotos.totalHits);
          toast.success(`${resPhotos.totalHits} images found for your request`);
        }

        if (resPhotos.hits.length === 0) {
          toast.error('Nothing found for your request');
          throw new Error('Nothing found for your request');
        }
        setStatus(Status.Success);
      } catch (error) {
        setStatus(Status.Error);
        toast.error(error);
      }
    };

    fetchPhotos({ q: search, page });
  }, [search, page, loadMore]);

  const handleSubmit = search => {
    setLoadMore(false);
    setPage(1);
    setSearch(search);
  };

  const handleLoadMore = async () => {
    setStatus(Status.Loading);
    setLoadMore(true);
    setPage(prev => prev + 1);
  };

  return (
    <>
      <Container>
        <Searchbar onSubmitSearch={handleSubmit} />
        <ImageGallery
          onLoadMore={handleLoadMore}
          search={search}
          setPage={setPage}
          page={page}
          gallery={gallery}
          totalImg={totalImg}
          status={status}
        />
      </Container>
      <ToastContainer autoClose={3000} />
    </>
  );
};
