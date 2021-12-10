import { useAuthContext } from '../../context/authContext';
import Message from './sections/message/Message';

const MyImages = () => {
  const { user } = useAuthContext();

  if (!user) {
    return <Message />;
  }

  return <div className='wrapper'>Hay usuario</div>;
};

export default MyImages;
