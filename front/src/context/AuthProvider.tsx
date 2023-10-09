import React, { createContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({} as any);

  const handleSetUser = (user: any): void => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, handleSetUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
