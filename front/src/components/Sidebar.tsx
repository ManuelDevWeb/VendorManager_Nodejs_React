import { useState } from "react";
import Image from "next/image";

// Icons
import { GrUserAdmin } from "react-icons/gr";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

// Components
import { ItemNav } from "@/components/ItemNav";

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
  {
    id: 4,
    name: "Admin",
    href: "/admin",
    icon: <GrUserAdmin />,
  },
];

const Sidebar = () => {
  const [adminProtected, setAdminProtected] = useState(true);

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
        {nav.map((item) => (
          <ItemNav key={item.id} item={item} />
        ))}
      </nav>
    </>
  );
};

export { Sidebar };
