import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledNavMobile, StyledMobileUl } from './styles';
import { useNavMobile } from './useNavMobile';
import { useAuthContext } from '../../context/authContext';
import UserAvatar from '../userAvatar/UserAvatar';
import UserModal from '../userModal/UserModal';
import { useCurrentRoute } from '../../hooks';

const NavMobile = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isUserModal, setIsUserModal] = useState(false);
  const { user } = useAuthContext();
  const currentRoutePathname = useCurrentRoute();
  const { NavLink, navControls, navFrom, liControls, liFrom, handleClick, closeMenuOnClick } =
    useNavMobile(isMenuOpen, setIsMenuOpen);

  return (
    <StyledNavMobile initial={navFrom} animate={navControls}>
      <StyledMobileUl>
        <motion.li initial={liFrom} animate={liControls} custom={0}>
          <NavLink
            to='/'
            className={linkRoute =>
              linkRoute.isActive ? 'link-mobile focus-clr active-link' : 'link-mobile focus-clr'
            }
            onClick={closeMenuOnClick}
          >
            Home
          </NavLink>
        </motion.li>

        <motion.li initial={liFrom} animate={liControls} custom={1}>
          <NavLink
            to='mis-imagenes'
            className={linkRoute =>
              linkRoute.isActive ? 'link-mobile focus-clr active-link' : 'link-mobile focus-clr'
            }
            onClick={closeMenuOnClick}
          >
            Mis Imágenes
          </NavLink>
        </motion.li>

        <motion.li initial={liFrom} animate={liControls} custom={2} className='relative-parent'>
          <button
            type='button'
            className='remove-default-button focus-box link-mobile'
            onClick={() => handleClick(user, setIsUserModal, currentRoutePathname)}
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
  setIsMenuOpen: PropTypes.func,
};

NavMobile.defaultProps = {
  isMenuOpen: null,
  setIsMenuOpen: null,
};

export default NavMobile;
