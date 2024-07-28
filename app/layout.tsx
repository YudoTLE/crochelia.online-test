import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crochelia",
  description: "The Official Crochelia Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Header/>
          <div className="bg-gradient-to-l from-white to-rose-200 pt-7 lg:pt-20 lg:min-h-dvh">
            {children}
          </div>
          <Footer/>
        </body>
      </html>
  );
}
