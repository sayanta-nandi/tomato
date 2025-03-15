"use client";

import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import { useRef } from "react";

export default function Home() {
  return (
    <div className="w-full">
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
}
