import styled from 'styled-components';
import { respondTo } from '../../styles/helpers';

const StyledBtn = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  z-index: 20;

  &:hover {
    cursor: pointer;
  }

  ${respondTo.mobileMenu`
    display: none;
  `}
`;

const StyledIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;

  .line {
    fill: none;
    stroke: var(--clr-white);
    stroke-width: 6;
    stroke-linecap: round;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1) var(--delay),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1) var(--delay);
  }

  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }

  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }

  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }

  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
`;

export { StyledBtn, StyledIconWrapper };
