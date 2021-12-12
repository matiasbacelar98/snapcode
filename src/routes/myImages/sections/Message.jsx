import PropTypes from 'prop-types';
import { StyledGridCenter } from '../../../styles/reusable/grid';
import { StyledMessage } from '../../../styles/reusable/typography';
import Footer from '../../../components/footer/Footer';

const Message = ({ content }) => {
  return (
    <>
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
