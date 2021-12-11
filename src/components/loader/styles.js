import styled from 'styled-components';
import { fluidValues } from '../../styles/helpers';

export const StyledLoader = styled.div`
  .loader {
    color: var(--clr-primary-500);
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: ${fluidValues(280, 1000, 58, 78)};
    opacity: 0.8;
  }
  .loader:before {
    content: '{';
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;
  }
  .loader:after {
    content: '}';
    display: inline-block;
    animation: pulse 0.4s 0.3s alternate infinite ease-in-out;
  }

  @keyframes pulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
`;
