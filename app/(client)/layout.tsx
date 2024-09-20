import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "./navigation";
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
          <Navigation/>
          <div className="bg-white">
            {children}
          </div>
          <div className="bg-white">
            <Footer/>
          </div>
        </body>
      </html>
  );
}
