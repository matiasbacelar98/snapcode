import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledFlexWrapper } from './styles';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import NavMobile from '../navMobile/NavMobile';
import HamburguerIcon from '../hamburguerIcon/HamburguerIcon';

const Header = ({ spacing }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  return (
    <header className={`wrapper ${spacing ? 'spacing-top' : ''}`}>
      <StyledFlexWrapper>
        <Logo />
        <HamburguerIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <Nav />
      </StyledFlexWrapper>

      {/* Mobile Nav */}
      <NavMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

// Proptypes
Header.propTypes = {
  spacing: PropTypes.bool,
};

Header.defaultProps = {
  spacing: false,
};

export default Header;
