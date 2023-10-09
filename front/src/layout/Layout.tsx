import Head from "next/head";

// Components
import { Sidebar } from "@/components/Sidebar";

// Custom Hooks
import { useVendorManager } from "@/hooks/useVendorManager";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { currentNavCategory }: any = useVendorManager();

  return (
    <>
      <Head>
        <title>Vendor Manager - {currentNavCategory?.name}</title>
        <meta name="description" content="Vendor Manager" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </>
  );
};

export { Layout };
