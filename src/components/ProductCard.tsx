import { Product } from "@/type";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ prod }: { prod: Product }) => {
  return (
    <div className="min-w-[50vw] md:min-w-[33vw] lg:min-w-[25vw] xl:min-w-[20vw] hover:bg-amber-50">
      {/* Image con */}
      <div className="w-full aspect-square relative hover:scale-110 transition-all overflow-hidden">
        <Image src={prod.image} alt="" fill className="overflow-hidden" />
      </div>
      {/* text con */}
      <div className="flex flex-col items-center gap-2 px-2 py-4">
        <p className="text-2xl font-bold text-orange-500 uppercase text-center text-balance">
          {prod.title}
        </p>
        <p className="text-orange-700 text-center text-balance">{prod.desc}</p>
        <p className="text-xl text-orange-600">${prod.price}</p>
        <Link
          href={`/product/${prod.id}`}
          className="hover:cursor-pointer hover:bg-orange-600 bg-orange-500 px-4 py-2 rounded-lg text-xl text-white"
        >
          Order
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
