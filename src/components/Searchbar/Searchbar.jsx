import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchLabel,
  Container,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmitSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitSearch(search);
    setSearch('');
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchLabel />
        </SearchButton>

        <SearchInput
          type="text"
          name="query"
          value={search}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
    </Container>
  );
};

Searchbar.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired,
};
