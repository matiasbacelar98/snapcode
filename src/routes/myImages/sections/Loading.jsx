import { StyledGridCenter } from '../../../styles/reusable/grid';
import Loader from '../../../components/loader/Loader';
import Footer from '../../../components/footer/Footer';

const Loading = () => {
  return (
    <>
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
