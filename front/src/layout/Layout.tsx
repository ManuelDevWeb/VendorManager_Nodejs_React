import Head from "next/head";

// Components
import { Sidebar } from "@/components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  page: string;
}

const Layout = ({ children, page }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Vendor Manager - {page}</title>
        <meta name="description" content="Vendor Manager" />
      </Head>

      <div className="flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
    </>
  );
};

export { Layout };
