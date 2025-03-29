"use client";

import { useStore } from "@/cart";
import { Product } from "@/type";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Price = ({ product }: { product: Product }) => {
  const { price, options } = product;
  const { addToCart } = useStore();
  const [count, setCount] = useState(1);
  const [selectedoption, setSelectedOption] = useState<{
    title: string;
    price: number;
  }>();
  const [newPrice, setNewPrice] = useState(price);
  const handleCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: newPrice,
      image: product.image,
      option: selectedoption?.title || "",
      quantity: count,
    });
    toast.success("Added to Cart");
  };
  useEffect(() => {
    if (options) {
      setSelectedOption(options[0]);
    }
  }, []);
  useEffect(() => {
    if (selectedoption) {
      setNewPrice(selectedoption.price * count);
    } else {
      setNewPrice(price * count);
    }
  }, [selectedoption, count]);
  return (
    <div className="flex flex-col gap-6">
      <p className="text-2xl">${newPrice}</p>
      <div className="flex text-lg border-orange-500 border w-fit">
        {options?.map((option) => (
          <button
            onClick={() => setSelectedOption({ ...option })}
            className={`flex justify-center items-center px-10 h-10 hover:cursor-pointer ${
              option.title === selectedoption?.title && "bg-orange-500"
            }`}
            key={option.title}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex w-80 border border-orange-500 justify-center items-center text-lg h-10">
        <p className="flex-1 pl-4">Quantity</p>
        <button
          className="hover:cursor-pointer px-3 bg-orange-500 h-full"
          onClick={() => setCount((prev) => (prev === 1 ? 1 : count - 1))}
        >
          {"<"}
        </button>
        <p className="px-3">{count}</p>
        <button
          className="hover:cursor-pointer px-3 bg-orange-500 h-full"
          onClick={() => setCount(count + 1)}
        >
          {">"}
        </button>
      </div>
      <div className="flex justify-center px-4 w-full">
        <button
          onClick={() => handleCart(product)}
          className="bg-orange-500 px-6 py-2 text-xl text-white rounded-2xl hover:cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Price;
