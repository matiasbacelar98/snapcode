import styled from 'styled-components';
import { respondTo } from '../../styles/helpers';

const StyledImagesGrid = styled.div`
  display: grid;
  row-gap: 2.5rem; // 40px

  ${respondTo.gridIcons`
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 21.875rem; // 350px
    column-gap: 2.5rem;
    row-gap: 4rem;
  `}
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .img {
    object-fit: contain;
    object-position: center;
    height: 100%;
    width: 100%;
  }

  .flex-btn {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 1rem;

    & > * + * {
      margin-top: 1rem;
    }
  }

  ${respondTo.gridIcons`
  .flex-btn {
      flex-direction: row;

      & > * + * {
        margin-top: 0;
        margin-left: 1rem;
      }
    }
  `}
`;

const StyledBtn = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem 0;
  background-color: ${props =>
    props.download ? 'var(--clr-success-400)' : 'var(--clr-danger-400)'};
  color: var(--clr-white);
  border-radius: var(--border-radius);
  border: 0;

  &:hover {
    cursor: pointer;
  }

  ${respondTo.gridIcons`
     margin-top: 0;
  `}
`;

export { StyledImagesGrid, StyledBtn, StyledFlexWrapper };
