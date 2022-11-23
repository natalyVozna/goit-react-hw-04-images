import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const key = '30593721-3615c14b1fd526cc46c7cd9ff';

export const searchPtotos = async (query, page) => {
  const response = await axios.get(
    `/?key=${key}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
  );
  return response.data;
};

export const addQuery = async obj => {
  const response = await axios.post(`/?key=${key}`, obj);
  return response.data;
};

export const deleteQuery = async id => {
  const response = await axios.delete(`/?key=${key}/${id}`);
  return response.data;
};

export const updateQuery = async fields => {
  const response = await axios.put(`/?key=${key}/${fields.id}`, fields);
  return response.data;
};
