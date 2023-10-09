import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Config
import { clientAxios } from "@/config/clientAxios";

// Components
import { BestBuyerCard } from "@/components/BestBuyerCard";

// Custom hooks
import { useAuth } from "@/hooks/useAuth";

const AdminInfo = () => {
  const [bestBuyers, setBestBuyers] = useState([]);
  const [bestSupplierProfession, setBestSupplierProfession] = useState({});

  const { user }: any = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user || !user.jwtToken) {
      router.push("/login");
    }

    if (user && user.jwtToken) {
      const getBestBuyers = async () => {
        const { data } = await clientAxios.get(
          "/admin/best-buyers?start=1&end=10&limit=3",
          {
            headers: {
              Authorization: `Bearer ${user.jwtToken}`,
            },
          }
        );
        setBestBuyers(data.body.data);
      };

      const getBestSupplierProfession = async () => {
        const { data } = await clientAxios.get(
          "/admin/best-supplier-profession?start=1&end=12",
          {
            headers: {
              Authorization: `Bearer ${user.jwtToken}`,
            },
          }
        );
        setBestSupplierProfession(data.body.data);
      };

      getBestBuyers();
      getBestSupplierProfession();
    }
  }, [user, router]);

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg px-6 py-4 my-10">
        <h2 className="text-2xl font-black">Best supplier profession</h2>
        <p className="text-2xl text-[#eeb158]">
          {bestSupplierProfession.profession} - $
          {bestSupplierProfession.amountPaid}
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap">
        {bestBuyers?.map((item: any) => (
          <BestBuyerCard key={item.id} buyer={item} />
        ))}
      </div>
    </>
  );
};

export { AdminInfo };
