import styled from 'styled-components';
import { respondTo } from '../../styles/helpers';

export const StyledSelect = styled.select`
  padding: 0.5rem;
  background-color: var(--clr-bg);
  color: var(--clr-white);
  border: 2px solid var(--clr-white);
  border-radius: var(--border-radius);
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:active {
    border-color: var(--clr-primary-500);
    outline: 0.5px solid var(--clr-primary-500);
  }

  ${respondTo.md`
    text-align: left;
  `}
`;
