import type { Metadata } from "next";
import "./globals.css";
import Navbar2 from "@/components/Navbar2";
import { Akaya_Kanadaka } from "@next/font/google";
import Notification from "@/components/Notification";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const akaya = Akaya_Kanadaka({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tomato",
  description: "Deliver your food with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`scrollbar-hidden flex flex-col items-center md:px-10 lg:px-16 xl:px-24 ${akaya.className}`}
      >
        <Notification />
        <Navbar />
        {/* <Navbar2 /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
