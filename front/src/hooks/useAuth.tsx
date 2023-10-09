import { useContext } from "react";

// Context
import { AuthContext } from "@/context/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
