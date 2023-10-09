interface AgreementCardProps {
  agreement: {
    id: number;
    terms: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    SupplierId: number;
    BuyerId: number;
    Buyer: {
      id: number;
      firstName: string;
    };
    Supplier: {
      id: number;
      firstName: string;
    };
  };
}

type ColorStatus = {
  [key: string]: string;
};

const COLOR_STATUS: ColorStatus = {
  new: "bg-green-500",
  in_progress: "bg-yellow-500",
  terminated: "bg-red-500",
};

const AgreementCard = ({ agreement }: AgreementCardProps) => {
  const statusColor: string = COLOR_STATUS[agreement.status];

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">{agreement.terms}</div>
        <p className="text-gray-700 text-base">
          Status:{" "}
          <span
            className={`inline-block ${statusColor} rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}
          >
            {agreement.status}
          </span>
        </p>
      </div>
      <div className="flex px-6 pb-2">
        <p>
          Buyer:{" "}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {agreement.Buyer.firstName}
          </span>
        </p>
        <p>
          Supplier:{" "}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {agreement.Supplier.firstName}
          </span>
        </p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View
        </button> */}
      </div>
    </div>
  );
};

export { AgreementCard };
