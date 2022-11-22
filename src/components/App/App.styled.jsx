import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-icon.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px; */
`;
export const ShowModalBtn = styled.button`
  display: flex;
  align-self: flex-start;
  padding: 15px;
  color: var(--title);
  border: 1px solid var(--text);
  border-radius: 3px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  padding: 0;
  margin: 0;
  background-color: #fff;
  border: 1px solid var(--title);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);

  transition: color 250ms var(--timing-function);
`;

export const CloseIconStyle = styled(CloseIcon)`
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: relative;
  top: 1px;
`;
