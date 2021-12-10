import styled from 'styled-components';
import { StyledMessage } from '../../../../styles/reusable/typography';

const Message = () => {
  return (
    <StyledWrapper className='wrapper'>
      <StyledMessage className='flex-item'>
        Por favor inicie sesion para ver esta informacion
      </StyledMessage>
    </StyledWrapper>
  );
};

// Styles
const StyledWrapper = styled.div`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Message;
