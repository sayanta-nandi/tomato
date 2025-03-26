import { useStore } from "@/cart";
import { MenuIcon, X } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "", authenticated: "none" },
  { name: "Menu", path: "menu", authenticated: "none" },
  { name: "Special Offers", path: "offer", authenticated: "none" },
  { name: "Track Orders", path: "order", authenticated: "user" },
  { name: "Cart", path: "cart", authenticated: "none" },
  { name: "Login/Signup", path: "login", authenticated: "noUser" },
];

const Navbar2 = ({
  path,
  status,
  data,
}: {
  path: string;
  status: boolean;
  data: Session | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalQuantity } = useStore();

  return (
    <>
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
              status
                ? item.authenticated === "noUser" && "hidden"
                : item.authenticated === "user" && "hidden"
            } ${path === item.path && "bg-orange-500"}`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
            {item.name === "Cart" && `(${totalQuantity})`}
          </Link>
        ))}
        {status && data?.user.isAdmin && (
          <Link
            href={`/add`}
            className={`py-2 px-4 rounded-3xl ${
              path === "add" && "bg-orange-500"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Add Product
          </Link>
        )}

        <button
          onClick={() => signOut()}
          className={`block py-2 px-4 hover:cursor-pointer rounded-3xl ${
            !status && "hidden"
          }`}
        >
          LogOut
        </button>
        <div
          className="absolute top-2 right-6 hover:cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </div>
      </div>
    </>
  );
};
export default Navbar2;
