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

  ${respondTo.md`
    text-align: left;
  `}
`;
