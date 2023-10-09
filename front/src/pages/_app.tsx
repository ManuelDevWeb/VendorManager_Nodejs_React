import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Provider
import { VendorManagerProvider } from "@/context/VendorManagerProvider";
import { AuthProvider } from "@/context/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <VendorManagerProvider>
        <Component {...pageProps} />
      </VendorManagerProvider>
    </AuthProvider>
  );
}
