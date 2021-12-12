import PropTypes from 'prop-types';
import { StyledLoader } from './styles';

const Loader = ({ gridItem }) => {
  return (
    <StyledLoader className={gridItem}>
      <span className='loader' />
    </StyledLoader>
  );
};

// Proptypes
Loader.propTypes = {
  gridItem: PropTypes.string,
};

Loader.defaultProps = {
  gridItem: '',
};

export default Loader;
