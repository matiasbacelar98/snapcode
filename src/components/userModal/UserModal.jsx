import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledWrapper } from './styles';
import { userModalAnimations } from './animations';
import { useClickOutside } from '../../hooks';
import { signOutUser } from '../../utils/utilities';

const UserModal = ({ setIsUserModal }) => {
  const userModalRef = useRef(null);
  const { userModalFrom, userModalTo, userModalExit } = userModalAnimations;

  // close user-modal when click outside
  useClickOutside(userModalRef, () => {
    setIsUserModal(false);
  });

  // SignOut user and close modal
  const handleSignOut = () => {
    signOutUser();
    setIsUserModal(prev => !prev);
  };

  return (
    <StyledWrapper
      initial={userModalFrom()}
      animate={userModalTo()}
      exit={userModalExit()}
      ref={userModalRef}
    >
      <Link to='/mis-imagenes' className='flex-item focus-bg'>
        Mis Imagenes
      </Link>
      <button
        type='button'
        onClick={handleSignOut}
        className='remove-default-button focus-bg flex-item'
        name='cerrar sesion'
      >
        Cerrar Sesion
      </button>
    </StyledWrapper>
  );
};

// Proptypes
UserModal.propTypes = {
  setIsUserModal: PropTypes.func.isRequired,
};

export default UserModal;
