import ProductCard from "@/components/ProductCard";
import { projectUrl } from "@/data";
import { Products } from "@prisma/client";

const getData = async (cat: string) => {
  const data = await fetch(`${projectUrl}/api/product?cat=${cat}`);
  if (!data.ok) {
    throw new Error("went wrong");
  }
  return data.json();
};

async function CatagoryPage({
  params,
}: {
  params: Promise<{ catagory: string }>;
}) {
  if (!projectUrl) return null;

  const pathname = await params;
  console.log(pathname);
  const items: Products[] = await getData(pathname.catagory);
  return (
    <div className="w-full">
      <div className="flex gap-4 flex-wrap w-full">
        {items.map((prod) => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}
export default CatagoryPage;
