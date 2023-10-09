import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Components
import { AgreementCard } from "@/components/AgreementCard";

// Custom hooks
import { useAuth } from "@/hooks/useAuth";

// Config
import { clientAxios } from "@/config/clientAxios";

const ListAgreements = () => {
  const [agreements, setAgreements] = useState([]);

  const router = useRouter();

  const { user }: any = useAuth();

  useEffect(() => {
    if (!user || !user.jwtToken) {
      router.push("/login");
    }

    if (user && user.jwtToken) {
      const getAgreements = async () => {
        const { data } = await clientAxios.get(`/agreements`, {
          headers: {
            Authorization: `Bearer ${user.jwtToken}`,
          },
        });
        console.log(data.body.data);
        setAgreements(data.body.data);
      };
      getAgreements();
    }
  }, [user, router]);

  return (
    <div className="flex flex-col md:flex-row gap-10 flex-wrap">
      {agreements?.map((item: any) => (
        <AgreementCard key={item.id} agreement={item} />
      ))}
    </div>
  );
};

export { ListAgreements };
