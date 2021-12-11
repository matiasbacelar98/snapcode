import { useAuthContext } from '../../context/authContext';
import Message from './sections/Message';
import Loading from './sections/Loading';

const MyImages = () => {
  // const { user } = useAuthContext();
  const user = false;
  const loading = false;

  if (!user) {
    return <Message />;
  }

  if (user && loading) {
    return <Loading />;
  }

  return <div className='wrapper'>Hay usuario</div>;
};

export default MyImages;
