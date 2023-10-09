import { useState } from "react";
import Image from "next/image";

// Components
import { ItemNav } from "@/components/ItemNav";

// Interfaces
import { ItemNavProps } from "../interface/index";

// Custom Hooks
import { useVendorManager } from "@/hooks/useVendorManager";

const Sidebar = () => {
  const { navCategories }: { navCategories?: ItemNavProps[] } =
    useVendorManager();

  //   const [adminProtected, setAdminProtected] = useState(true);

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
        {navCategories?.map((item: ItemNavProps) => (
          <ItemNav key={item.id} item={item} />
        ))}
      </nav>
    </>
  );
};

export { Sidebar };
