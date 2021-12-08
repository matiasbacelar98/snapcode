import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImgWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;

  .user-avatar {
    width: inherit;
    height: inherit;
    border-radius: 50%;
  }
`;

export { StyledWrapper, StyledImgWrapper };
