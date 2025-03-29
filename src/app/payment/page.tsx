"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LoadingPage from "../loading";
import { useStore } from "@/cart";
import { delivery_charge, platform_charge, projectUrl } from "@/data";
import { OrderType } from "@/type";

const PaymentPage = () => {
  const { status, data: userData } = useSession();
  const router = useRouter();
  const { totalPrice, products, removeFromCart } = useStore();
  if (status === "unauthenticated") {
    router.push("/");
    return;
  }
  if (status === "loading") {
    return <LoadingPage />;
  }
  const handlePayment = async () => {
    const productsArray = products.map(
      (product) => `${product.title}(${product.option}x${product.quantity})`
    );
    const price = totalPrice + platform_charge + delivery_charge;
    const order: OrderType = {
      price: price,
      products: productsArray,
      orderedBy: userData?.user.email!,
      status: "on the way...",
    };
    const res = await fetch(`${projectUrl}/api/order`, {
      method: "PUT",
      body: JSON.stringify(order),
    });
    if (res.ok) {
      products.map((product) => {
        removeFromCart(product);
      });
      router.push("/paymentSuccess");
    }
  };
  return (
    <div className="gap-4 w-full h-[calc(100vh-320px)] sm:h-[calc(100vh-256px)] md:h-[calc(100vh-224px)] flex-col flex justify-center items-center">
      <span className="text-xl">
        ${totalPrice + platform_charge + delivery_charge}
      </span>
      <button
        onClick={handlePayment}
        className="hover:cursor-pointer text-white hover:bg-green-400 bg-green-500 rounded-lg px-6 py-2"
      >
        Pay
      </button>
    </div>
  );
};
export default PaymentPage;
