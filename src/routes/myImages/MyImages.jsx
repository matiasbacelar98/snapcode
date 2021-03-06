import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../../supabase/supabase';
import { useAuthContext } from '../../context/authContext';
// Sections & Components
import UserImages from './sections/UserImages';
import Message from './sections/Message';
import Loading from './sections/Loading';
import Footer from '../../components/footer/Footer';

const MyImages = ({ spacing }) => {
  const [userImages, setUserImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) return;

    const getUserImages = async () => {
      // fetch images to get names
      const { errorImages, data } = await supabase.storage
        .from('snippets')
        .list(`${user.user.id}`, {
          limit: 100,
          offset: 0,
        });

      // if error doesnt exists is undefined
      setError(errorImages);

      // generate download urls with the names
      data.map(async obj => {
        const { errorUrl, signedURL } = await supabase.storage
          .from('snippets')
          .createSignedUrl(`${user.user.id}/${obj.name}`, 604800);

        // if error doesnt exists is undefined
        setError(errorUrl);

        setUserImages(prevState => [...prevState, { name: obj.name, url: signedURL }]);
      });

      setLoading(false);
    };

    getUserImages();
  }, [user]);

  if (!user) {
    return <Message content='Por favor inicie sesión para ver esta información' />;
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Message content='Ha ocurrido un error , por favor recargue la pagina' />;
  }

  return (
    <>
      <Helmet>
        <title>Mis Imágenes</title>
        <meta
          name='description'
          content='Descarga u borra los snippets de codigo que tengas guardados'
        />
      </Helmet>

      <main className={`wrapper flow-spacing-1 ${spacing ? 'spacing-top' : ''}`}>
        <h1 className='visually-hidden'>Mis Imágenes</h1>

        <UserImages userImages={userImages} setUserImages={setUserImages} />
      </main>

      <Footer spacing />
    </>
  );
};

// Proptypes
MyImages.propTypes = {
  spacing: PropTypes.bool,
};

MyImages.defaultProps = {
  spacing: false,
};

export default MyImages;
