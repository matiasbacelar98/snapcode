import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fluidValues } from '../../styles/helpers';

const StyledSvg = styled.svg`
  width: ${fluidValues(280, 1400, 56, 64)};
  height: 4.125rem; // 66px
`;

function Logo() {
  return (
    <Link to='/' className='focus'>
      <StyledSvg viewBox='0 0 63 66' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <text
          id='logo'
          stroke='#F66D6D'
          strokeWidth='3'
          xmlSpace='preserve'
          style={{ whiteSpace: 'pre' }}
          fontFamily='Mulish'
          fontSize='35'
          fontWeight='bold'
          letterSpacing='0.06em'
        >
          <tspan x='7.20781' y='47.4125'>
            SC
          </tspan>
        </text>
      </StyledSvg>
    </Link>
  );
}

export default Logo;
