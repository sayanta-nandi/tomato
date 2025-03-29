"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentSuccessPage = () => {
  const router = useRouter();
  const [count, setCount] = useState(3);
  useEffect(() => {
    console.log("useeffect");
    const timeout = setTimeout(() => {
      console.log("rei=d");
      router.push("/order");
    }, 3000);
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-full h-[calc(100vh-320px)] sm:h-[calc(100vh-256px)] md:h-[calc(100vh-224px)] flex-col flex justify-center items-center">
      <span>
        Payment successfull!! Redirecting to order page in {count} sec
      </span>
      <div className="size-20 rounded-full bg-green-500 flex justify-center items-center text-white animate-jump animate-duration-[1500ms]">
        <Check
          size={40}
          className="animate-wiggle-more animate-infinite"
          strokeWidth={4}
        />
      </div>
    </div>
  );
};
export default PaymentSuccessPage;
