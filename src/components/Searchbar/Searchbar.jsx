import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchLabel,
  Container,
} from './Searchbar.styled';

export const Searchbar = ({ search, onChangeSearch, onSubmitSearch }) => {
  return (
    <Container>
      <SearchForm onSubmit={onSubmitSearch}>
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
          onChange={onChangeSearch}
        />
      </SearchForm>
    </Container>
  );
};

Searchbar.propTypes = {
  search: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
};
