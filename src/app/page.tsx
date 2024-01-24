'use client'
import ProductCards from "@/components/ProductCards";
import styles from "./page.module.css";
import Header from "@/components/Header";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        <Header />
        <ProductCards />
      </main>
    </QueryClientProvider>
  );
}
