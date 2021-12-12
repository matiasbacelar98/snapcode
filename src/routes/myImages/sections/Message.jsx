import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { StyledGridCenter } from '../../../styles/reusable/grid';
import { StyledMessage } from '../../../styles/reusable/typography';
import Footer from '../../../components/footer/Footer';

const Message = ({ content }) => {
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
          <StyledMessage className='center'>{content}</StyledMessage>
        </StyledGridCenter>
      </main>

      <Footer spacing />
    </>
  );
};

// Proptypes
Message.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Message;
