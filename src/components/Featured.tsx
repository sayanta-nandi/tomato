import { FeaturedProducts } from "@/data";
import ProductCard from "./ProductCard";

const Featured = () => {
  return (
    <div className="scrollbar-hidden flex overflow-scroll py-10 md:gap-2 xl:gap-4">
      {FeaturedProducts.map((item) => (
        <ProductCard key={item.id} prod={item} />
      ))}
    </div>
  );
};
export default Featured;
