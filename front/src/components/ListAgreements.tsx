// Components
import { AgreementCard } from "@/components/AgreementCard";

const data = [
  {
    id: 3,
    terms: "Sample terms for agreement 3",
    status: "in_progress",
    createdAt: "2023-10-09T05:37:28.682Z",
    updatedAt: "2023-10-09T05:37:28.682Z",
    SupplierId: 6,
    BuyerId: 2,
    Buyer: {
      id: 2,
      firstName: "Bob",
    },
    Supplier: {
      id: 6,
      firstName: "Jane",
    },
  },
  {
    id: 4,
    terms: "Sample terms for agreement 4",
    status: "in_progress",
    createdAt: "2023-10-09T05:37:28.682Z",
    updatedAt: "2023-10-09T05:37:28.682Z",
    SupplierId: 7,
    BuyerId: 2,
    Buyer: {
      id: 2,
      firstName: "Bob",
    },
    Supplier: {
      id: 7,
      firstName: "Mike",
    },
  },
];

const ListAgreements = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 flex-wrap">
      {data.map((item) => (
        <AgreementCard key={item.id} agreement={item} />
      ))}
    </div>
  );
};

export { ListAgreements };
