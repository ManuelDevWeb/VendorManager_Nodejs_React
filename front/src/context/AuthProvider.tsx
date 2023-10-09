import React, { createContext, useState, useEffect } from "react";

// Config
import { clientAxios } from "@/config/clientAxios";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({} as any);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
