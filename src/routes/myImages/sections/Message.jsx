import { StyledWrapper } from './styles';
import { StyledMessage } from '../../../styles/reusable/typography';
import Footer from '../../../components/footer/Footer';

const Message = () => {
  return (
    <StyledWrapper className='wrapper'>
      <div className='center'>
        <StyledMessage>Por favor inicie sesion para ver esta informacion</StyledMessage>
      </div>

      <Footer spacing />
    </StyledWrapper>
  );
};

export default Message;
