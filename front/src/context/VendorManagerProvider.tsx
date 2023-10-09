import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

interface VendorManagerProviderProps {
  children: React.ReactNode;
}

// Interfaces
import { ItemNavProps } from "../interface/index";

// Icons
import { GrUserAdmin } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const nav = [
  {
    id: 1,
    name: "Agreements",
    href: "/",
    icon: <FaHandshake />,
  },
  {
    id: 2,
    name: "Submissions",
    href: "/submissions",
    icon: <TbTruckDelivery />,
  },
  {
    id: 3,
    name: "Balance",
    href: "/balance",
    icon: <MdAccountBalanceWallet />,
  },
];

const navAdmin = [
  ...nav,
  {
    id: 4,
    name: "Admin",
    href: "/admin",
    icon: <GrUserAdmin />,
  },
];

const VendorManagerContext = createContext({});

const VendorManagerProvider = ({ children }: VendorManagerProviderProps) => {
  const navCategories: Array<ItemNavProps> = nav;
  const navCategoriesAdmin: Array<ItemNavProps> = navAdmin;

  const [currentNavCategory, setCurrentNavCategory] = useState<
    ItemNavProps | undefined
  >(undefined);

  const router = useRouter();
  const currentRoute = router.pathname;

  const handleClickCategory = (category: ItemNavProps): void => {
    setCurrentNavCategory(category);
    router.push(category.href);
  };

  useEffect(() => {
    const findIndexNav = nav.findIndex((item) => item.href === currentRoute);
    setCurrentNavCategory(nav[findIndexNav]);
  }, [navCategories, currentRoute]);

  return (
    <VendorManagerContext.Provider
      value={{
        navCategories,
        navCategoriesAdmin,
        currentNavCategory,
        handleClickCategory,
      }}
    >
      {children}
    </VendorManagerContext.Provider>
  );
};

export { VendorManagerContext, VendorManagerProvider };
