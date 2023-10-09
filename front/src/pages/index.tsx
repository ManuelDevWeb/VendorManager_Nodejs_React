import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Custom Hooks
import { useVendorManager } from "@/hooks/useVendorManager";

// Components
import { ListAgreements } from "@/components/ListAgreements";
import { Balance } from "@/components/Balance";

// Layout
import { Layout } from "@/layout/Layout";

export default function Home() {
  const { currentNavCategory }: any = useVendorManager();

  return (
    <Layout page={`${currentNavCategory?.name}`}>
      {currentNavCategory?.id === 1 && (
        <>
          {" "}
          <h1 className="text-4xl font-black">Agreements</h1>
          <p className="text-2xl my-10">
            Here you can find all the agreements you have with other users.
          </p>
          <div className="flex flex-col md:flex-row gap-10 flex-wrap">
            <ListAgreements />
          </div>
        </>
      )}
      {currentNavCategory?.id === 3 && (
        <>
          <h1 className="text-4xl font-black">Balance</h1>
          <p className="text-2xl my-10">
            Here you can find all the agreements you have with other users.
          </p>
          <div className="flex flex-col md:flex-row gap-10 flex-wrap">
            <Balance />
          </div>
        </>
      )}
    </Layout>
  );
}
