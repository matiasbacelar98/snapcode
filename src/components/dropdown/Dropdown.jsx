import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { StyledSelect } from './styles';

const Dropdown = ({ value, onChange, data, classGridItem }) => {
  return (
    <StyledSelect value={value} onChange={onChange} className={classGridItem}>
      {data.sort().map(item => (
        <option key={uuid()} value={item}>
          {item === 'xml' ? 'html' : item}
        </option>
      ))}
    </StyledSelect>
  );
};

// Proptypes
Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  classGridItem: PropTypes.string.isRequired,
};

export default Dropdown;
