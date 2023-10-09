import { useContext } from "react";

// Context
import { VendorManagerContext } from "@/context/VendorManagerProvider";

const useVendorManager = () => {
  return useContext(VendorManagerContext);
};

export { useVendorManager };
