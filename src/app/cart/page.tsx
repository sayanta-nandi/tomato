"use client";

import { useStore } from "@/cart";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { products, totalPrice, totalQuantity, removeFromCart } = useStore();
  return (
    <div className="flex w-full flex-col lg:flex-row ">
      {/* Product container */}
      <div className="flex w-full flex-col lg:overflow-scroll lg:h-[calc(100vh-224px)] scrollbar-hidden">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="flex w-full justify-between px-4 odd:bg-amber-50 relative"
          >
            {/* pic */}
            <div className="relative w-1/4 aspect-square">
              <Image src={prod.image} alt="" fill />
            </div>
            {/* text */}
            <div className="flex flex-col justify-center">
              <div className="uppercase text-2xl">{prod.title}</div>
              <div>
                {prod.option} (x{prod.quantity})
              </div>
            </div>
            {/* price */}
            <div className="flex items-center">${prod.price}</div>
            <div
              className="absolute right-0 hover:cursor-pointer"
              onClick={() => removeFromCart(prod)}
            >
              <X />
            </div>
          </div>
        ))}
      </div>
      {/* price container */}
      <div className="w-full lg:w-1/3 h-[50vh] lg:h-[calc(100vh-224px)] bg-fuchsia-50 flex flex-col justify-center px-20 text-xl gap-4">
        <div className="flex justify-between">
          <span>Subtotal(x{totalQuantity})</span>
          <span>{totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Platform Charges</span>
          <span>$2</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span>$1</span>
        </div>
        <div className="h-0.5 bg-fuchsia-300" />
        <div className="flex justify-between">
          <span>Total Amount</span>
          <span>${totalPrice + 3}</span>
        </div>
        <Link
          href="/"
          className="py-2 px-4 bg-green-500 rounded-lg text-white w-fit self-end"
        >
          CheckOut
        </Link>
      </div>
    </div>
  );
};
export default CartPage;
