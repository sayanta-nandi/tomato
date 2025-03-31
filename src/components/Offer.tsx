"use client";

import Image from "next/image";
import Link from "next/link";
import Countdown from "react-countdown";

const Offer = () => {
  return (
    <div
      className={`h-screen bg-[url(/bgImgOffer.png)] flex flex-col items-center bg-cover py-6 px-4 md:flex-row md:h-[60vh] lg:px-28 lg:h-[80vh] rounded-2xl shadow-lg mb-8`}
    >
      <div className="text-white h-1/2 flex flex-col justify-center gap-2 md:w-2/3 md:h-full lg:w-1/2">
        <p className="text-3xl font-bold uppercase">
          Burger & Fries Combo Offer
        </p>
        <p className="text-balance text-amber-100">
          Get our juicy Spicy Chicken Burger paired with crispy golden fries at
          an unbeatable combo price! Perfect for a quick, satisfying meal.
          Hurry, limited time offer!
        </p>
        <p className="self-center text-2xl text-amber-300">$40</p>
        <Link
          href="/offer"
          className="bg-amber-500 w-fit self-center px-4 py-2 rounded-lg text-xl hover:cursor-pointer hover:bg-amber-600"
        >
          Claim Offer!
        </Link>
        <Countdown
          className="self-center text-2xl text-amber-200"
          date="2025-03-11T01:02:03"
        />
      </div>
      <div className="h-1/2 aspect-square relative md:w-1/3 lg:w-1/2 md:h-auto">
        <Image src="/offerImage.png" alt="" fill />
      </div>
    </div>
  );
};

export default Offer;
