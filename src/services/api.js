import axios from 'axios';
// import img from '../assets/autumn-poolside.jpeg';
// import img1 from '../assets/img1.jpg';
// import img2 from '../assets/img2.jpg';

const key = '30593721-3615c14b1fd526cc46c7cd9ff';
const photosApi = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: 1,
  },
});

// const data = {
//   hits: [
//     {
//       webformatURL: `${img}`,
//       largeImageURL: `${img}`,
//       tags: 'dfjdsbfa',
//       id: 1,
//     },
//     {
//       webformatURL: `${img1}`,
//       largeImageURL: `${img1}`,
//       tags: 'dfjdsbfa',
//       id: 2,
//     },
//     {
//       webformatURL: `${img2}`,
//       largeImageURL: `${img2}`,
//       tags: 'dfjdsbfa',
//       id: 3,
//     },
//     {
//       webformatURL: `${img}`,
//       largeImageURL: `${img}`,
//       tags: 'dfjdsbfa',
//       id: 4,
//     },
//     {
//       webformatURL: `${img1}`,
//       largeImageURL: `${img1}`,
//       tags: 'dfjdsbfa',
//       id: 5,
//     },
//     {
//       webformatURL: `${img2}`,
//       largeImageURL: `${img2}`,
//       tags: 'dfjdsbfa',
//       id: 6,
//     },
//     {
//       webformatURL: `${img}`,
//       largeImageURL: `${img}`,
//       tags: 'dfjdsbfa',
//       id: 7,
//     },
//     {
//       webformatURL: `${img1}`,
//       largeImageURL: `${img1}`,
//       tags: 'dfjdsbfa',
//       id: 8,
//     },
//     {
//       webformatURL: `${img2}`,
//       largeImageURL: `${img2}`,
//       tags: 'dfjdsbfa',
//       id: 9,
//     },
//   ],
//   total: 27,
// };

export const getPtotos = async params => {
  const response = await photosApi.get(`/?key=${key}`, { params });
  return response.data;
};

// export const addQuery = async obj => {
//   const response = await axios.post(`/?key=${key}`, obj);
//   return response.data;
// };

// export const deleteQuery = async id => {
//   const response = await axios.delete(`/?key=${key}/${id}`);
//   return response.data;
// };

// export const updateQuery = async fields => {
//   const response = await axios.put(`/?key=${key}/${fields.id}`, fields);
//   return response.data;
// };
