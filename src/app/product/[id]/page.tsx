import AddToFeatured from "@/components/AddToFeatured";
import DeleteButton from "@/components/DeleteButton";
import Price from "@/components/Price";
import { projectUrl } from "@/data";
import { Product } from "@/type";
import Image from "next/image";

const getProduct = async (id: string) => {
  const res = await fetch(`${projectUrl}/api/product/${id}`);

  if (!res.ok) {
    throw new Error("Product response was not ok");
  }

  return res.json();
};

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  if (!projectUrl) return null;

  const { id } = await params;
  const product: Product = await getProduct(id);
  console.log(product);
  if (!product) return;
  return (
    <div className="relative items-center flex flex-col w-full md:flex-row py-10 px-6">
      <div className="relative w-[90%] aspect-square md:w-[40%]">
        <Image src={product.image} alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col gap-6 pt-10 lg:pt-30">
          <p className="uppercase font-bold text-2xl">{product.title}</p>
          <p className="text-wrap">{product.desc}</p>
          <Price product={product} />
        </div>
      </div>
      <div className="absolute top-0 right-0 m-2 flex flex-col gap-2">
        <DeleteButton id={id} />
        <AddToFeatured id={id} />
      </div>
    </div>
  );
};
export default ProductPage;
