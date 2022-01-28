import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { StyledNav, StyledUl, StyledBtn } from './styles';
import UserAvatar from '../userAvatar/UserAvatar';
import UserModal from '../userModal/UserModal';
import { useCurrentRoute } from '../../hooks';
import { useAuthContext } from '../../context/authContext';
import { handleClick } from '../../utils/utilities';

const Nav = () => {
  const [isUserModal, setIsUserModal] = useState(false);
  const { user } = useAuthContext();
  const currentRoutePathname = useCurrentRoute();

  return (
    <StyledNav>
      <StyledUl>
        <li>
          <NavLink
            to='/'
            className={linkRoute =>
              linkRoute.isActive ? 'active-link link-desktop focus-clr' : 'link-desktop focus-clr'
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to='mis-imagenes'
            className={linkRoute =>
              linkRoute.isActive ? 'active-link link-desktop focus-clr' : 'link-desktop focus-clr'
            }
          >
            Mis Imágenes
          </NavLink>
        </li>

        <li className='relative-parent'>
          <StyledBtn
            type='button'
            onClick={() => handleClick(user, setIsUserModal, currentRoutePathname)}
            className='focus-bg'
            aria-label={user ? 'abrir modal' : 'login/registro'}
          >
            {user ? <UserAvatar bigSize={false} /> : 'Login/Registro'}
          </StyledBtn>

          <AnimatePresence>
            {isUserModal ? <UserModal key='user-modal' setIsUserModal={setIsUserModal} /> : null}
          </AnimatePresence>
        </li>
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
