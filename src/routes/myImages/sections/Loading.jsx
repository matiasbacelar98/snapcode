import { Helmet } from 'react-helmet-async';
import { StyledGridCenter } from '../../../styles/reusable/grid';
import Loader from '../../../components/loader/Loader';
import Footer from '../../../components/footer/Footer';

const Loading = () => {
  return (
    <>
      <Helmet>
        <title>Mis Imagenes</title>
        <meta
          name='description'
          content='Descarga u borra los snippets de codigo que tengas guardados'
        />
      </Helmet>

      <main className='wrapper'>
        <StyledGridCenter>
          <Loader gridItem='center' />
        </StyledGridCenter>
      </main>

      <Footer spacing />
    </>
  );
};

export default Loading;
