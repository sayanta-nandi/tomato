import ProductCard from "@/components/ProductCard";
import { Products } from "@/data";

async function CatagoryPage({
  params,
}: {
  params: Promise<{ catagory: String }>;
}) {
  const pathname = await params;
  console.log(pathname);
  const items = Products.filter((item) => item.catagory === pathname.catagory);
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {items.map((prod) => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}
export default CatagoryPage;
