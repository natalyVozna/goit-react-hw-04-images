import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 0;
`;

export const GalleryList = styled.ul`
  display: grid;
  padding-top: 16px;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin-top: 0;
  margin-bottom: 20px;
  padding: 0;
  grid-gap: 16px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
