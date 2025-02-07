import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient(); // ✅ Create a new instance of QueryClient

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loom - Connect. Create. Inspire.",
  description:
    "Join millions of creators sharing their stories and connecting with like-minded individuals on Loom's innovative social platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
