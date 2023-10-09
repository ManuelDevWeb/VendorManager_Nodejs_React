import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Components
import { ListAgreements } from "@/components/ListAgreements";

// Layout
import { Layout } from "@/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-black">Agreements</h1>
      <p className="text-2xl my-10">
        Here you can find all the agreements you have with other users.
      </p>

      <div className="flex flex-col md:flex-row gap-10 flex-wrap">
        <ListAgreements />
      </div>
    </Layout>
  );
}
