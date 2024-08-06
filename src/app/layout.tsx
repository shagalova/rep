
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
import "./globals.css";
import { Navbar } from "@/components";
import StoreProvider from "@/app/StoreProvider";



export const metadata: Metadata = {
  title: "Bookshop_v2",
  description: "Discover the best books in the world.",
};

const fontMain = Montserrat({
  weight: ["700"],
  subsets: ["latin"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontMain.className}>
      <body className="relative mt-[116px] xl:mt-[70px] lg:mt-[40px]">
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
        
      </body>
    </html>
  );
}
