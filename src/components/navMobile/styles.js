import styled from 'styled-components';
import { motion } from 'framer-motion';
import { respondTo, fluidValues } from '../../styles/helpers';

const StyledNavMobile = styled(motion.nav)`
  background-color: var(--clr-black-opacity);
  z-index: 10;

  ${respondTo.mobileMenu`
    display: none;
  `}
`;

const StyledMobileUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  margin-top: 9rem; // 144px

  // Spacing
  & > * + * {
    margin-top: ${fluidValues(280, 600, 32, 44)};
  }
`;

const StyledBtn = styled.button`
  &:focus,
  &:active {
    border-color: var(--clr-primary-500);
    outline: 0.5px solid var(--clr-primary-500);
  }
`;

export { StyledNavMobile, StyledMobileUl, StyledBtn };
