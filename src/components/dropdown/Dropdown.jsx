import PropTypes from 'prop-types';
import { StyledSelect } from './styles';

const Dropdown = ({ value, onChange, data, classGridItem }) => {
  return (
    <StyledSelect defaultValue={value} onChange={onChange} className={`${classGridItem} focus-bg`}>
      {data.sort().map(item => (
        <option key={item} value={item}>
          {item}
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
