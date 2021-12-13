import styled from 'styled-components';
import Footer from '../../components/footer/Footer';
import { StyledH1 } from '../../styles/reusable/typography';
import { StyledGridCenter } from '../../styles/reusable/grid';

const Error = () => {
  return (
    <>
      <main className='wrapper'>
        <StyledGridCenter>
          <StyledFlexWrapper className='center'>
            <StyledH1 error>404</StyledH1>
            <p>La pagina que estas buscando no existe</p>
          </StyledFlexWrapper>
        </StyledGridCenter>
      </main>
      <Footer spacing />
    </>
  );
};

// Styles
const StyledFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Error;
