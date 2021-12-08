import styled from 'styled-components';
import { respondTo } from '../../styles/helpers';

const StyledNav = styled.nav`
  display: none;

  ${respondTo.mobileMenu`
    display: block;
  `}
`;

const StyledUl = styled.ul`
  ${respondTo.mobileMenu`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `}

  // Spacing between li
    & > * + * {
    margin-left: 2.5rem; // 40px
  }
`;

const StyledBtn = styled.button`
  font-size: var(--fs-text-big);
  padding: 0.5rem 1.2rem;
  background-color: transparent;
  color: var(--clr-white);
  border: 1px solid var(--clr-white);
  border-radius: var(--border-radius);
  transition: var(--btn-transition);

  &:hover {
    background-color: var(--clr-white-opacity);
    cursor: pointer;
  }
`;

export { StyledNav, StyledUl, StyledBtn };
