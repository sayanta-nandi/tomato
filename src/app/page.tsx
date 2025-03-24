import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import { projectUrl } from "@/data";

export default function Home() {
  if (!projectUrl) return null;
  return (
    <div className="w-full">
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
}
