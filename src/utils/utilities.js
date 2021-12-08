import { supabase } from '../supabase/supabase';

const signInWithGithub = async () => {
  await supabase.auth.signIn({
    provider: 'github',
  });
};

const signOutUser = async () => {
  await supabase.auth.signOut();
};

const removeScrollbar = () => {
  document.body.classList.toggle('remove-scroll');
};

const handleClick = (user, setState) => {
  // Login user
  if (user === null) {
    signInWithGithub();
  }

  if (user) {
    // Toggle userInfoComponent
    setState(prev => !prev);
  }
};

export { removeScrollbar, signInWithGithub, signOutUser, handleClick };
