import React, { createContext, useState } from 'react';
import { User } from '../../interface/User';


interface AuthContextValue {
  user: User;
  login: (username: string, password: string) => void;
  logout: () => void;
  errorText: string;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({ username: '', password: '', isAuthenticated: false });
  const [error,setError] = useState('')

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      setUser({ username, password, isAuthenticated: true });
      setError("")
    } else {
      setUser({ username: '', password: '', isAuthenticated: false });
      setError("Wrong credentials!")
    }
  };

  const logout = () => {
    setUser({ username: '', password: '', isAuthenticated: false });
  };

  const contextValue: AuthContextValue = {
    user,
    login,
    logout,
    errorText: error
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
