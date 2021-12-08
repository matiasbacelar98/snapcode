import styled from 'styled-components';
import { respondTo } from '../../styles/helpers';

export const Box = styled.div`
  font-size: var(--fs-text);
  background-color: var(--clr-white);
  color: var(--clr-bg);
  border-radius: var(--border-radius);
  padding: 0.5rem;

  ${respondTo.gridIcons`
  background-color: var(--clr-bg);
  color: var(--clr-white);
`}
`;
