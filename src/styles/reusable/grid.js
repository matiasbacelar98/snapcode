import styled from 'styled-components';

export const StyledGridCenter = styled.div`
  min-height: calc(100vh - var(--size, 14rem));
  display: grid;
  grid-template-rows: 1fr;

  .center {
    justify-self: center;
    align-self: center;
  }

  .start {
    align-self: start;
  }
`;
