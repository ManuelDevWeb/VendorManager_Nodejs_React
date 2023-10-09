import { useState } from "react";
import Image from "next/image";

// Components
import { ItemNav } from "@/components/ItemNav";

// Interfaces
import { ItemNavProps } from "../interface/index";

// Custom Hooks
import { useVendorManager } from "@/hooks/useVendorManager";
import { useAuth } from "@/hooks/useAuth";

const Sidebar = () => {
  const {
    navCategories,
    navCategoriesAdmin,
  }: { navCategories?: ItemNavProps[]; navCategoriesAdmin?: ItemNavProps[] } =
    useVendorManager();
  const { user }: any = useAuth();

  // Validate if the user is admin
  const isAdmin = user?.role === "admin";

  const tabNav = isAdmin ? navCategoriesAdmin : navCategories;

  return (
    <>
      <Image
        width={300}
        height={100}
        src={"/images/logo.jpg"}
        alt="Img logo"
        className="mx-auto"
      />

      <nav className="mt-10">
        {tabNav?.map((item: ItemNavProps) => (
          <ItemNav key={item.id} item={item} />
        ))}
      </nav>
    </>
  );
};

export { Sidebar };
