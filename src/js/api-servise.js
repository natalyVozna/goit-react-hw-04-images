import axios from 'axios';

export default class ApiServise {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const KEY_AUTH = '30593721-3615c14b1fd526cc46c7cd9ff';
    const url = `https://pixabay.com/api/?key=${KEY_AUTH}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=4`;

    return axios.get(url).then(response => {
      this.page += 1;
      return response.data;
    });
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  resetPage() {
    this.page = 1;
  }
}
