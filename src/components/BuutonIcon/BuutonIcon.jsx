import {} from './BuutonIcon.styled';
import PropTypes from 'prop-types';

export const BuutonIcon = ({ children }) => {
  return <button>{children}</button>;
};

BuutonIcon.propTypes = {
  children: PropTypes.node,
};
