import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AuthProvider } from "@/contexts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boilerplate",
  description: "Criado por Allan Scain",
  icons: "/desktop_phone.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <main className="flex flex-col bg-emerald-900 text-emerald-100 min-h-screen antialiased">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
