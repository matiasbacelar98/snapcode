import { StyledWrapper } from './styles';
import Footer from '../../../components/footer/Footer';

const Loading = () => {
  return (
    <StyledWrapper className='wrapper'>
      <p className='center'>Cargando...</p>

      <Footer spacing />
    </StyledWrapper>
  );
};

export default Loading;
