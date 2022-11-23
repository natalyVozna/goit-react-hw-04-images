import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchLabel,
  Container,
} from './Searchbar.styled';
// import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter photo title');

      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <Container>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <SearchLabel />
          </SearchButton>

          <SearchInput
            type="text"
            name="query"
            value={query}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </Container>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
