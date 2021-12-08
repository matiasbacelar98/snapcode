import PropTypes from 'prop-types';
import UseAnimations from 'react-useanimations';
import menu2 from 'react-useanimations/lib/menu2';
import { StyledBtn } from './styles';

const HamburguerIcon = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <StyledBtn
      type='button'
      aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
      onClick={() => setIsMenuOpen(prev => !prev)}
    >
      <UseAnimations
        reverse={isMenuOpen}
        animation={menu2}
        strokeColor='var(--clr-white)'
        speed={2}
        size={48}
      />
    </StyledBtn>
  );
};

// Proptypes
HamburguerIcon.propTypes = {
  isMenuOpen: PropTypes.bool,
  setIsMenuOpen: PropTypes.func.isRequired,
};

HamburguerIcon.defaultProps = {
  isMenuOpen: null,
};

export default HamburguerIcon;
