import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  top: 100%;
  width: 100%;
  margin-top: 0.5rem;
  border: 1px solid var(--clr-white);
  border-bottom: 0;
  border-radius: var(--border-radius);

  .flex-item {
    flex: 0 1 100%;
    padding: 0.5rem 0;
    font-size: var(--fs-text);
    color: var(--clr-white);
    border-bottom: 1px solid var(--clr-white);
    background-color: transparent;
    transition: var(--btn-transition);

    &:hover {
      background-color: var(--clr-white-opacity);
      cursor: pointer;
    }
  }
`;
