import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full rounded-t-2xl border border-gray-300 shadow bg-gray-200 flex flex-col md:flex-row items-center justify-center md:justify-between p-4 md:px-16 lg:px-32 gap-2 h-24 md:h-16">
      <div className="w-full md:w-fit flex justify-center text-sm text-gray-500">
        Copyright © 2025 Tomato, Inc.
      </div>
      <div className="w-full flex flex-wrap justify-evenly md:w-[55%] lg:w-[40%]">
        <Link href="/#" className="underline">
          Privacy Policy
        </Link>
        <Link href="/#" className="underline">
          Security
        </Link>
        <Link href="/#" className="underline">
          About
        </Link>
      </div>
    </div>
  );
};
export default Footer;
