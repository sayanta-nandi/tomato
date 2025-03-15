import Image from "next/image";
import Link from "next/link";

const Notification = () => {
  return (
    <div className="bg-[#FAFAFA] flex flex-col sm:flex-row items-center justify-between w-full h-32 sm:h-16 p-4 border border-gray-200 rounded-b-3xl mx-5">
      <div className="flex items-center">
        <Image src="/star.png" alt="" height={32} width={32} />
        <p>
          Get 5% Off on your first order,{" "}
          <Link href="/#" className="text-orange-500 underline">
            Promo:ORDER5
          </Link>
        </p>
      </div>
      <div className="flex items-center gap-1">
        <Image src="/location.png" alt="" height={32} width={32} />
        <p>
          12/8, Beccan Street, London{" "}
          <Link href="/#" className="text-orange-500 underline">
            Change Location
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Notification;
