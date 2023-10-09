import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Layout
import { Layout } from "@/layout/Layout";

export default function Home() {
  return (
    <Layout page={`User agreements`}>
      <h1 className="text-4xl font-black">Agreements</h1>
      <p className="text-2xl my-10">
        Here you can find all the agreements that you have
      </p>
    </Layout>
  );
}
