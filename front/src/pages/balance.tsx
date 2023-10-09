// Layout
import { Layout } from "@/layout/Layout";

const balance = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-black">Balance</h1>
      <p className="text-2xl my-10">
        You can add balance to your account here!.
      </p>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap">
        <p>Balance!!</p>
      </div>
    </Layout>
  );
};

export default balance;
