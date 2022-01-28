import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { StyledH1 } from '../../styles/reusable/typography';
import { StyledIntro } from './styles';
import CodeEditor from '../../components/codeEditor/CodeEditor';
import Footer from '../../components/footer/Footer';

const Home = ({ spacing }) => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name='description'
          content='Pagina de inicio Snapcode , crea tus snippets de codigo para compartir con otros programadores!'
        />
      </Helmet>

      <main className={`wrapper flow-spacing-1 ${spacing ? 'spacing-top' : ''}`}>
        <StyledIntro className='flow-spacing-2'>
          <StyledH1>Snapcode</StyledH1>
          <p className='parragraph'>
            Elegí un lenguaje de programación , un tema de tu preferencia y escribí el código en el
            editor , descárgalo como imagen y compartirlo con otros programadores.
          </p>
        </StyledIntro>

        <section>
          <CodeEditor />
        </section>
      </main>

      <Footer spacing />
    </>
  );
};

// Proptypes
Home.propTypes = {
  spacing: PropTypes.bool,
};

Home.defaultProps = {
  spacing: false,
};

export default Home;
