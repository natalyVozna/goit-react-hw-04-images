import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const searchPtotos = async (query, page) => {
  const key = '30593721-3615c14b1fd526cc46c7cd9ff';
  const response = await axios.get(
    `/?key=${key}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
  return response.data;
};
