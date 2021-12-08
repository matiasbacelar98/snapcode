import styled from 'styled-components';

export const StyledActionBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
  border: 2px solid var(--clr-white);
  border-radius: var(--border-radius);
  transition: var(--btn-transition);

  &:hover {
    background-color: var(--clr-white-opacity);
    cursor: pointer;
  }
`;
