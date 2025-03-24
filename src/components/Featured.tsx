import { projectUrl } from "@/data";
import ProductCard from "./ProductCard";
import { Products } from "@prisma/client";

const getData = async () => {
  const data = await fetch(`${projectUrl}/api/product`);
  if (!data.ok) {
    throw new Error("went wrong");
  }
  return data.json();
};

const Featured = async () => {
  const FeaturedProducts: Products[] = await getData();
  return (
    <div className="scrollbar-hidden flex overflow-scroll py-10 md:gap-2 xl:gap-4">
      {FeaturedProducts.map((item) => (
        <ProductCard key={item.id} prod={item} />
      ))}
    </div>
  );
};
export default Featured;
