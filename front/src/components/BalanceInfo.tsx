// Custom Hooks
import { useAuth } from "@/hooks/useAuth";

const BalanceInfo = () => {
  const { user }: any = useAuth();

  return (
    <div className="rounded overflow-hidden shadow-lg px-6 py-4 my-10">
      <h2 className="text-2xl font-black">
        Dear {user.firstName} {user.lastName}
      </h2>
      <p className="text-2xl ">
        Your current balance is:{" "}
        <span className="text-[#eeb158]">${user.balance}</span>
      </p>
    </div>
  );
};

export { BalanceInfo };
