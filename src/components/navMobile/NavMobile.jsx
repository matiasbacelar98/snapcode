import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledNavMobile, StyledMobileUl, StyledBtn } from './styles';
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
              linkRoute.isActive ? 'link-mobile active-link' : 'link-mobile'
            }
          >
            Home
          </NavLink>
        </motion.li>

        <motion.li initial={liFrom} animate={liControls} custom={1}>
          <NavLink
            to='mis-imagenes'
            className={linkRoute =>
              linkRoute.isActive ? 'link-mobile active-link' : 'link-mobile'
            }
          >
            Mis imagenes
          </NavLink>
        </motion.li>

        <motion.li initial={liFrom} animate={liControls} custom={2} className='relative-parent'>
          <StyledBtn
            type='button'
            className='remove-default-button link-mobile'
            onClick={() => handleClick(user, setIsUserModal)}
          >
            {user ? <UserAvatar bigSize /> : 'Login/Registro'}
          </StyledBtn>

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
