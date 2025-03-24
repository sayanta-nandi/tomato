import type { Metadata } from "next";
import "./globals.css";
import { Akaya_Kanadaka } from "@next/font/google";
import Notification from "@/components/Notification";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import QueryProvider from "@/components/QueryProvider";
import { ToastContainer } from "react-toastify";

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
      <SessionProvider>
        <QueryProvider>
          <body
            className={`scrollbar-hidden flex flex-col items-center md:px-10 lg:px-16 xl:px-24 ${akaya.className}`}
          >
            <Notification />
            <Navbar />
            {/* <Navbar2 /> */}
            {children}
            <Footer />
            <ToastContainer
              position="bottom-right"
              theme="dark"
              autoClose={3000}
            />
          </body>
        </QueryProvider>
      </SessionProvider>
    </html>
  );
}
