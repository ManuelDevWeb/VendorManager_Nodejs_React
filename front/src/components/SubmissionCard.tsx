import { useState } from "react";

interface SubmissionCardProps {
  submission: {
    id: number;
    description: string;
    price: number;
    paid: boolean;
    paymentDate: string | null;
    createdAt: string;
    updatedAt: string;
    AgreementId: number;
    Agreement: {
      id: number;
      terms: string;
      status: string;
      createdAt: string;
      updatedAt: string;
      SupplierId: number;
      BuyerId: number;
    };
  };
}

const SubmissionCard = ({ submission }: SubmissionCardProps) => {
  const paid = submission.paid;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-1">{submission.description}</div>
        <p className="mb-2 font-black text-2xl text-[#eeb158]">
          Price: $ {submission.price}
        </p>
        <span
          className={`${
            paid ? "bg-green-500" : "bg-red-500"
          } inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}
        >
          {paid ? "Paid" : "Not paid"}
        </span>
      </div>
      {
        // Button to pay
        !paid && (
          <div className="px-6 pb-4 w-full">
            <button className="bg-pink-700 hover:bg-pink-950 text-white font-bold py-2 px-4 rounded w-full">
              Go to payment
            </button>
          </div>
        )
      }
    </div>
  );
};

export { SubmissionCard };
