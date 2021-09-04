import { supabase } from '@App/lib';
import { User, UserCredentials } from '@supabase/gotrue-js';
import * as React from 'react';

interface IAuthProps {
  signUp: (data: UserCredentials) => Promise<any>;
  signIn: (data: UserCredentials) => Promise<any>;
  signOut: () => Promise<any>;
  user: User | null;
}

export const AuthContext = React.createContext({} as IAuthProps);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );
    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    signUp: (data: UserCredentials) => supabase.auth.signUp(data),
    signIn: (data: UserCredentials) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : loading}
    </AuthContext.Provider>
  );
};
