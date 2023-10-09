// Layout
import { Layout } from "@/layout/Layout";

// Components
import { BestBuyerCard } from "@/components/BestBuyerCard";

const bestSupplierProfession = {
  profession: "Engineer",
  amountPaid: 327.29,
};

const bestBuyers = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    profession: "Engineer",
    amountPaid: 327.29,
  },
  {
    id: 4,
    firstName: "Mark",
    lastName: "Williams",
    profession: "Writer",
    amountPaid: 312.66,
  },
  {
    id: 3,
    firstName: "Eve",
    lastName: "Green",
    profession: "Artist",
    amountPaid: 278.1,
  },
];

const admin = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-black">Admin</h1>
      <p className="text-2xl my-10">Here you can find important data!</p>
      <div className="rounded overflow-hidden shadow-lg px-6 py-4 my-10">
        <h2 className="text-2xl font-black">Best supplier profession</h2>
        <p className="text-2xl text-[#eeb158]">
          {bestSupplierProfession.profession} - $
          {bestSupplierProfession.amountPaid}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap">
        {bestBuyers.map((item) => (
          <BestBuyerCard key={item.id} buyer={item} />
        ))}
      </div>
    </Layout>
  );
};

export default admin;
