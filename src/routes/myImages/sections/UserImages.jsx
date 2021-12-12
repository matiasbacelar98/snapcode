import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import { StyledImagesGrid, StyledBtn, StyledFlexWrapper } from '../styles';
import { supabase } from '../../../supabase/supabase';
import { useAuthContext } from '../../../context/authContext';
import { StyledGridCenter } from '../../../styles/reusable/grid';
import { StyledMessage } from '../../../styles/reusable/typography';

const UserImages = ({ userImages, setUserImages }) => {
  const { user } = useAuthContext();

  const downloadImage = async imgName => {
    const { data, error } = await supabase.storage
      .from('snippets')
      .download(`${user.user.id}/${imgName}`);

    // download
    saveAs(data, `${imgName}`);
  };

  const deleteImage = async imgName => {
    await supabase.storage.from('snippets').remove([`${user.user.id}/${imgName}`]);

    const updatedUserImages = userImages.filter(obj => obj.name !== imgName);
    setUserImages(updatedUserImages);
  };

  if (!userImages.length) {
    return (
      <StyledGridCenter style={{ '--size': '18rem' }}>
        <StyledMessage className='center'>No hay imagenes guardadas</StyledMessage>
      </StyledGridCenter>
    );
  }

  return (
    <StyledGridCenter style={{ '--size': '18rem' }}>
      <StyledImagesGrid className={userImages.length === 1 ? 'start' : ''}>
        {userImages.map(img => (
          <StyledFlexWrapper key={img.name}>
            <img className='img' alt={img.name} src={img.url} />

            <div className='flex-btn'>
              <StyledBtn
                download
                type='button'
                name='descargar'
                className='focus-bg'
                onClick={() => downloadImage(img.name)}
              >
                Descargar imagen
              </StyledBtn>

              <StyledBtn
                type='button'
                name='borrar'
                className='focus-bg'
                onClick={() => deleteImage(img.name)}
              >
                Borrar imagen
              </StyledBtn>
            </div>
          </StyledFlexWrapper>
        ))}
      </StyledImagesGrid>
    </StyledGridCenter>
  );
};

// Proptypes
UserImages.propTypes = {
  userImages: PropTypes.arrayOf(PropTypes.object).isRequired,
  setUserImages: PropTypes.func.isRequired,
};

export default UserImages;
