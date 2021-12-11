import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: calc(100vh - 7rem);
  display: grid;
  grid-template-rows: 1fr auto;

  .center {
    justify-self: center;
    align-self: center;
  }
`;
