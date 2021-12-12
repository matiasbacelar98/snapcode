import { supabase } from '../supabase/supabase';

const signInWithGithub = async pathname => {
  await supabase.auth.signIn(
    {
      provider: 'github',
    },
    {
      redirectTo: `${import.meta.env.VITE_APP_URL}${pathname}`,
    }
  );
};

const signOutUser = async () => {
  await supabase.auth.signOut();
};

const removeScrollbar = () => {
  document.body.classList.toggle('remove-scroll');
};

const handleClick = (user, setState, pathname) => {
  // Login user
  if (user === null) {
    signInWithGithub(pathname);
  }

  if (user) {
    // Toggle userInfoComponent
    setState(prev => !prev);
  }
};

export { removeScrollbar, signInWithGithub, signOutUser, handleClick };
