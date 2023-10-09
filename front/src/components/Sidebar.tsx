import Image from "next/image";

const nav = [
  {
    id: 1,
    name: "Agreements",
    href: "/",
  },
  {
    id: 2,
    name: "Submissions",
    href: "/submissions",
  },
  {
    id: 3,
    name: "Balance",
    href: "/balance",
  },
  {
    id: 4,
    name: "Admin",
    href: "/admin",
  },
];

const Sidebar = () => {
  return (
    <>
      <Image
        width={300}
        height={100}
        src={"/assets/img/logo.jpg"}
        alt="Img logo"
        className="mx-auto"
      />

      <nav className="mt-10"></nav>
    </>
  );
};

export { Sidebar };
