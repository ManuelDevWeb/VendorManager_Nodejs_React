import { useState, useEffect } from "react";

// Custom Hooks
import { useAuth } from "@/hooks/useAuth";

// Config
import { clientAxios } from "@/config/clientAxios";

const BalanceInfo = () => {
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState("");
  const [localUser, setLocalUser] = useState({} as any);

  const { user, handleSetUser }: any = useAuth();

  const handleSubmit = async () => {
    if (balance <= 0) {
      return alert("The balance must be greater than 0");
    }

    try {
      const { data } = await clientAxios.post(
        `/balances/deposit/${user.id}`,
        {
          amount: balance,
        },
        {
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
          },
        }
      );

      // Actualiza el usuario en el contexto
      handleSetUser({
        ...user,
        balance: data.body.data.balance,
      });

      // Restablece el balance a 0
      setBalance(0);
    } catch (err) {
      return alert("Error occurred while adding balance.");
    }
  };

  useEffect(() => {
    // Actualiza el estado local del usuario cuando se cambia en el contexto
    setLocalUser(user);
  }, [user]);

  return (
    <div className="rounded overflow-hidden shadow-lg px-6 py-4 my-10">
      <h2 className="text-2xl font-black">
        Dear {localUser?.firstName} {localUser?.lastName}
      </h2>
      <p className="text-2xl ">
        Your current balance is:{" "}
        <span className="text-[#eeb158]">${localUser?.balance}</span>
      </p>
      <div className="my-5">
        <label
          htmlFor="amout"
          className="uppercase text-gray-600 block text-xl font-bold"
        >
          Amount
        </label>
        <input
          id="amount"
          type="number"
          placeholder="Enter amount"
          className="w-full lg:w-[30%] mt-2 p-3 border rounded-xl bg-gray-50  focus:outline-yellow-600"
          value={balance}
          onChange={(e) => setBalance(+e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        value="Add Balance"
        className="w-full lg:w-[30%] bg-pink-700 hover:bg-pink-950 py-3 text-white uppercase font-bold rounded hover:cursor-pointer  transition-colors"
      >
        Add Balance
      </button>
    </div>
  );
};

export { BalanceInfo };
