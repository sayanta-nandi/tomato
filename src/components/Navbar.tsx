"use client";

import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "" },
  { name: "Menu", path: "menu" },
  { name: "Special Offers", path: "offer" },
  { name: "Track Orders", path: "order" },
  { name: "Cart", path: "cart" },
  { name: "Login/Signup", path: "login" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  const path = pathname.split("/")[1];
  console.log(path);
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
          Cart
        </Link>
        <Link
          href="/order"
          className={`rounded-xl px-4 h-8 flex items-center justify-center ${
            path === "order" && "bg-orange-500 text-white transiton-all"
          }`}
        >
          Track Orders
        </Link>
        <Link
          href="/login"
          className="relative bg-[#03081F] flex gap-1 items-center rounded-3xl px-4 py-2 text-white "
        >
          <div className="relative size-8">
            <Image src="/user.png" alt="" fill />
          </div>
          LogIn/SignUp
        </Link>
      </div>
      <div
        className="md:hidden hover:cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed left-0 top-0 z-50 h-screen w-screen bg-slate-900/60 flex-col items-center justify-center text-xl text-white gap-2 animate-fade-down animate-once animate-ease-in`}
      >
        {navItems.map((item) => (
          <Link
            href={`/${item.path}`}
            key={item.path}
            className={`block py-2 px-4 rounded-3xl ${
              path === item.path && "bg-orange-500"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <div
          className="absolute top-2 right-6 hover:cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
