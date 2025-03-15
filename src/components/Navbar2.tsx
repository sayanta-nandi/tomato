"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/categories" },
  { name: "Menu", path: "/menu" },
];

export default function Navbar2() {
  const pathname = usePathname();

  return (
    <nav className="w-full p-4 flex justify-center">
      <ul className="flex space-x-6 relative">
        {navItems.map((item) => (
          <li key={item.path} className="relative">
            <Link href={item.path} className="relative px-4 py-2 text-white">
              {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-blue-500 rounded-lg -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
