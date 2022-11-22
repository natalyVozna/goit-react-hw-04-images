import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

export const Container = styled.header`
  display: flex;
  background-color: #303f9f;
  justify-content: center;
  padding: 10px 25px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-flex;
  width: 48px;
  height: 48px;
  border: 0;
  align-items: center;
  justify-content: center;
  opacity: 0.6;

  :hover {
    opacity: 1;
  }
`;

export const SearchLabel = styled(SearchIcon)`
  width: 26px;
  height: 28px;
  fill: var(--text);
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
