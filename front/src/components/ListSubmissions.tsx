// Components
import { SubmissionCard } from "./SubmissionCard";

const data = [
  {
    id: 3,
    description: "Sample submission 3",
    price: 144.33,
    paid: false,
    paymentDate: null,
    createdAt: "2023-10-09T05:37:28.683Z",
    updatedAt: "2023-10-09T05:37:28.683Z",
    AgreementId: 3,
    Agreement: {
      id: 3,
      terms: "Sample terms for agreement 3",
      status: "in_progress",
      createdAt: "2023-10-09T05:37:28.682Z",
      updatedAt: "2023-10-09T05:37:28.682Z",
      SupplierId: 6,
      BuyerId: 2,
    },
  },
  {
    id: 4,
    description: "Sample submission 4",
    price: 199.44,
    paid: false,
    paymentDate: null,
    createdAt: "2023-10-09T05:37:28.683Z",
    updatedAt: "2023-10-09T05:37:28.683Z",
    AgreementId: 4,
    Agreement: {
      id: 4,
      terms: "Sample terms for agreement 4",
      status: "in_progress",
      createdAt: "2023-10-09T05:37:28.682Z",
      updatedAt: "2023-10-09T05:37:28.682Z",
      SupplierId: 7,
      BuyerId: 2,
    },
  },
];

const ListSubmissions = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 flex-wrap">
      {data.map((item) => (
        <SubmissionCard key={item.id} submission={item} />
      ))}
    </div>
  );
};

export { ListSubmissions };
