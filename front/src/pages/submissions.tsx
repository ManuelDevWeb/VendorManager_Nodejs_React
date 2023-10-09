// Layout
import { Layout } from "@/layout/Layout";

// Components
import { ListSubmissions } from "@/components/ListSubmissions";

const submissions = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-black">Submissions</h1>
      <p className="text-2xl my-10">
        Here you can see and pay all your submissions.
      </p>
      <div className="flex flex-col md:flex-row gap-10 flex-wrap">
        <ListSubmissions />
      </div>
    </Layout>
  );
};

export default submissions;
