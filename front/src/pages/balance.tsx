// Layout
import { Layout } from "@/layout/Layout";

// Components
import { BalanceInfo } from "@/components/BalanceInfo";

const balance = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-black">Balance</h1>
      <p className="text-2xl my-10">
        You can add balance to your account here!.
      </p>
      <BalanceInfo />
    </Layout>
  );
};

export default balance;
