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
    <div className="px-4 flex py-10 flex-col">
      <p className="text-4xl font-semibold">Featured Products</p>
      <div className="scrollbar-hidden flex overflow-scroll pt-5 gap-4 xl:gap-8">
        {FeaturedProducts.map((item) => (
          <ProductCard key={item.id} prod={item} />
        ))}
      </div>
    </div>
  );
};
export default Featured;
