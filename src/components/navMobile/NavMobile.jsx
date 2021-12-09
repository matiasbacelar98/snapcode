import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledNavMobile, StyledMobileUl } from './styles';
import { useNavMobile } from './useNavMobile';
import { useAuthContext } from '../../context/authContext';
import UserAvatar from '../userAvatar/UserAvatar';
import UserModal from '../userModal/UserModal';

const NavMobile = ({ isMenuOpen }) => {
  const [isUserModal, setIsUserModal] = useState(false);
  const { user } = useAuthContext();
  const { NavLink, navControls, navFrom, liControls, liFrom, handleClick } =
    useNavMobile(isMenuOpen);

  return (
    <StyledNavMobile initial={navFrom} animate={navControls}>
      <StyledMobileUl>
        <motion.li initial={liFrom} animate={liControls} custom={0}>
          <NavLink
            to='/'
            className={linkRoute =>
              linkRoute.isActive ? 'link-mobile focus-box active-link' : 'link-mobile focus-box'
            }
          >
            Home
          </NavLink>
        </motion.li>

        <motion.li initial={liFrom} animate={liControls} custom={1}>
          <NavLink
            to='mis-imagenes'
            className={linkRoute =>
              linkRoute.isActive ? 'link-mobile focus-box active-link' : 'link-mobile focus-box'
            }
          >
            Mis imagenes
          </NavLink>
        </motion.li>

        <motion.li initial={liFrom} animate={liControls} custom={2} className='relative-parent'>
          <button
            type='button'
            className='remove-default-button focus-box link-mobile'
            onClick={() => handleClick(user, setIsUserModal)}
            aria-label={user ? 'abrir modal' : 'login/registro'}
          >
            {user ? <UserAvatar bigSize /> : 'Login/Registro'}
          </button>

          <AnimatePresence>
            {isUserModal ? <UserModal key='user-modal' setIsUserModal={setIsUserModal} /> : null}
          </AnimatePresence>
        </motion.li>
      </StyledMobileUl>
    </StyledNavMobile>
  );
};

// Proptypes
NavMobile.propTypes = {
  isMenuOpen: PropTypes.bool,
};

NavMobile.defaultProps = {
  isMenuOpen: null,
};

export default NavMobile;
