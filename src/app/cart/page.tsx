import { CrossIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cartProd = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    price: 45,
    quantity: 2,
    option: "small",
    image: "/pizza.png",
  },
  {
    id: 2,
    title: "Spicy Chicken Burger",
    price: 39,
    quantity: 1,
    option: "large",
    image: "/burger.png",
  },
  {
    id: 3,
    title: "Veggie Delight Sandwich",
    price: 20,
    quantity: 2,
    option: "meduim",
    image: "/sandwitch.png",
  },
];

const CartPage = () => {
  return (
    <div className="flex w-full flex-col lg:flex-row ">
      {/* Product container */}
      <div className="flex w-full flex-col lg:overflow-scroll lg:h-[calc(100vh-224px)] scrollbar-hidden">
        {cartProd.map((prod) => (
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
            <div className="flex items-center">
              ${prod.price * prod.quantity}
            </div>
            <div className="absolute right-0 hover:cursor-pointer">
              <X />
            </div>
          </div>
        ))}
      </div>
      {/* price container */}
      <div className="w-full lg:w-1/3 h-[50vh] lg:h-[calc(100vh-224px)] bg-fuchsia-50 flex flex-col justify-center px-20 text-xl gap-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$125</span>
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
          <span>$128</span>
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
