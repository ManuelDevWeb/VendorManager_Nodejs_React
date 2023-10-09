// Layout
import { Layout } from "@/layout/Layout";

import { AdminInfo } from "@/components/AdminInfo";

const admin = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-black">Admin</h1>
      <p className="text-2xl my-10">Here you can find important data!</p>
      <AdminInfo />
    </Layout>
  );
};

export default admin;
