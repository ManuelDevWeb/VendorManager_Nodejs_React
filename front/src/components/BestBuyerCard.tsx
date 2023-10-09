interface BestBuyerCardProps {
  buyer: {
    id: number;
    firstName: string;
    lastName: string;
    profession: string;
    amountPaid: number;
  };
}

const BestBuyerCard = ({ buyer }: BestBuyerCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">
          {buyer.firstName} {buyer.lastName}
        </div>
        <p className="mb-2 font-black text-2xl">
          Profession: <span className="text-[#eeb158]">{buyer.profession}</span>
        </p>
        <p className="mb-2 font-black text-2xl ">
          Amount Paid:{" "}
          <span className="text-[#eeb158]"> $ {buyer.amountPaid} </span>
        </p>
      </div>
    </div>
  );
};

export { BestBuyerCard };
