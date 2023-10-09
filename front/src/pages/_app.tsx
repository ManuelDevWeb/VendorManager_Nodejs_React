import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Provider
import { VendorManagerProvider } from "@/context/VendorManagerProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VendorManagerProvider>
      <Component {...pageProps} />
    </VendorManagerProvider>
  );
}
