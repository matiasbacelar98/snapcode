import PropTypes from 'prop-types';
import { StyledWrapper, StyledImgWrapper } from './styles';
import { useAuthContext } from '../../context/authContext';

const UserAvatar = ({ bigSize }) => {
  const { user } = useAuthContext();

  return (
    <StyledWrapper>
      <StyledImgWrapper>
        <img
          className='user-avatar'
          src={user.user.user_metadata.avatar_url}
          alt='avatar usuario'
        />
      </StyledImgWrapper>

      <p className={bigSize ? 'link-mobile' : null}>{user.user.user_metadata.full_name}</p>
    </StyledWrapper>
  );
};

// Proptypes
UserAvatar.propTypes = {
  bigSize: PropTypes.bool.isRequired,
};

export default UserAvatar;
