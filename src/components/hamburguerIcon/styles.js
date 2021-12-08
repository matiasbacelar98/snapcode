import styled from 'styled-components';
import { respondTo } from '../../styles/helpers';

export const StyledBtn = styled.button`
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
