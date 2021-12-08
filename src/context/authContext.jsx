/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { supabase } from '../supabase/supabase';

// Context
const AuthContext = createContext();

// Export context
export const useAuthContext = () => useContext(AuthContext);

// Provider
const AuthProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // set user with current session
    setUser(supabase.auth.session());

    // update user session
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session);
    });
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{props.children}</AuthContext.Provider>;
};

// Proptypes
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
