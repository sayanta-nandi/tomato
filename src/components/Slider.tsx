"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const sliderItems = [
  {
    image: "/slider.jpg",
    text1: "Feast Your Senses,",
    text2: "Fast ans Fresh!",
  },
  {
    image: "/slider1.jpg",
    text1: "Your favorite meals,",
    text2: "delivered instantly!",
  },
  {
    image: "/slider2.jpg",
    text1: "Delicious food,",
    text2: "just a click away!",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === sliderItems.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FBFBFB] border border-gray-200 shadow relative rounded-2xl gap-4 lg:h-[calc(100vh-6rem)]">
      <div className="lg:w-2/3 right-0 h-96 w-full relative lg:absolute lg:h-full overflow-visible">
        <Image
          src={sliderItems[index].image}
          alt=""
          fill
          className="animate-fade-left animate-infinite animate-duration-[2000ms] animate-ease-in-out overflow-visible object-cover right-0"
        />
      </div>
      <div className="flex items-center lg:items-baseline flex-col w-full h-80 px-20 justify-center gap-2 z-10">
        <p>Order restaurent food</p>
        <h1 className="text-4xl font-bold text-balance text-center animate-fade-right animate-infinite animate-duration-[2000ms] animate-ease-in">
          {sliderItems[index].text1}{" "}
          <span className="text-orange-500">{sliderItems[index].text2}</span>
        </h1>
        <Link
          href="/"
          className="bg-amber-500 w-fit px-4 py-2 rounded-2xl text-white text-xl hover:cursor-pointer "
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};
export default Slider;
