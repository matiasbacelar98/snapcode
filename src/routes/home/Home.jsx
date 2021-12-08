import PropTypes from 'prop-types';
import { StyledH1 } from '../../styles/reusable/typography';
import { StyledIntro } from './styles';
import CodeEditor from '../../components/codeEditor/CodeEditor';

const Home = ({ spacing }) => {
  return (
    <main className={`wrapper flow-spacing-1 ${spacing ? 'spacing-top' : ''}`}>
      <StyledIntro className='flow-spacing-2'>
        <StyledH1>Snapcode</StyledH1>
        <p className='parragraph'>
          Elegi un lenguaje de programacion , un tema de tu preferencia y escribi el codigo en el
          editor , descargalo como imagen y compartirlo con otros programadores.
        </p>
      </StyledIntro>

      <section>
        <CodeEditor />
      </section>
    </main>
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
