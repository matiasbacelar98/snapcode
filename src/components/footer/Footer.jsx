import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledParragraphSmall, StyledHighlight } from '../../styles/reusable/typography';

const Footer = ({ spacing }) => {
  return (
    <StyledFooter className={`wrapper ${spacing ? 'spacing-top' : ''}`}>
      <StyledParragraphSmall>
        &copy; 2021 <StyledHighlight>snapcode</StyledHighlight> - Todos Los Derechos Reservados
      </StyledParragraphSmall>
    </StyledFooter>
  );
};

// Styles
const StyledFooter = styled.footer`
  margin-bottom: var(--spacing-2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// Proptypes
Footer.propTypes = {
  spacing: PropTypes.bool,
};

Footer.defaultProps = {
  spacing: false,
};

export default Footer;
