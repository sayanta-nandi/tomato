"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Navbar2 from "./Navbar2";
import { useSession, signOut } from "next-auth/react";
import { useStore } from "@/cart";

const Navbar = () => {
  const { totalQuantity } = useStore();
  const pathname = usePathname();
  console.log(pathname);
  const path = pathname.split("/")[1];
  console.log(path);
  const { status, data } = useSession();
  return (
    <div className="p-2 w-full h-24 flex items-center justify-between bg-transparent">
      <Link href="/" className="flex relative h-full w-36">
        <Image src="/logo.png" alt="" fill />
      </Link>
      <div className="hidden md:flex gap-4 py-2 px-4 items-center">
        <Link
          href="/"
          className={`rounded-xl px-4 h-8 flex items-center justify-center ${
            path === "" && "bg-orange-500 text-white transiton-all"
          }`}
        >
          Home
        </Link>
        <Link
          href="/menu"
          className={`rounded-xl px-4 h-8 flex items-center justify-center ${
            path === "menu" && "bg-orange-500 text-white transiton-all"
          }`}
        >
          Menu
        </Link>
        <Link
          href="/offer"
          className={`rounded-xl px-4 h-8 flex items-center justify-center ${
            path === "offer" && "bg-orange-500 text-white transiton-all"
          }`}
        >
          Special Offers
        </Link>
        <Link
          href="/cart"
          className={`rounded-xl px-4 h-8 flex items-center justify-center ${
            path === "cart" && "bg-orange-500 text-white transiton-all"
          }`}
        >
          Cart({totalQuantity})
        </Link>
        {status === "authenticated" ? (
          <>
            <Link
              href="/order"
              className={`rounded-xl px-4 h-8 flex items-center justify-center ${
                path === "order" && "bg-orange-500 text-white transiton-all"
              }`}
            >
              Track Orders
            </Link>
            {data.user.isAdmin && (
              <Link
                href="/add"
                className={`rounded-xl px-4 h-8 flex items-center justify-center ${
                  path === "add" && "bg-orange-500 text-white transiton-all"
                }`}
              >
                Add Products
              </Link>
            )}
            <button
              onClick={() => {
                signOut({ redirectTo: "/" });
              }}
              className="hover:cursor-pointer rounded-xl px-4 h-8 flex items-center justify-center bg-red-500 text-white"
            >
              Logout
            </button>
            <div className="relative bg-[#03081F] flex gap-1 items-center rounded-3xl px-4 py-2 text-white ">
              <div className="relative size-8 rounded-full overflow-hidden">
                <Image src={data.user.image || "/user.png"} alt="" fill />
              </div>
              {data.user.name}
            </div>
          </>
        ) : (
          <Link
            href="/login"
            className="relative bg-[#03081F] flex gap-1 items-center rounded-3xl px-4 py-2 text-white "
          >
            <div className="relative size-8">
              <Image src="/user.png" alt="" fill />
            </div>
            LogIn/SignUp
          </Link>
        )}
      </div>
      <Navbar2 path={path} data={data} status={status === "authenticated"} />
    </div>
  );
};
export default Navbar;
