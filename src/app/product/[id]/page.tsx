import DeleteButton from "@/components/DeleteButton";
import Price from "@/components/Price";
import { projectUrl } from "@/data";
import { Product } from "@/type";
import Image from "next/image";

const getProduct = async (id: string) => {
  const res = await fetch(`/api/product/${id}`);

  if (!res.ok) {
    throw new Error("Product response was not ok");
  }

  return res.json();
};

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product: Product = await getProduct(id);
  console.log(product);
  if (!product) return;
  return (
    <div className="relative flex flex-col w-full md:flex-row py-10 px-6">
      <div className="relative w-full aspect-square md:w-1/2">
        <Image src={product.image} alt="" fill />
      </div>
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col gap-6 pt-10 lg:pt-30">
          <p className="uppercase font-bold text-2xl">{product.title}</p>
          <p className="text-wrap">{product.desc}</p>
          <Price product={product} />
        </div>
      </div>
      <DeleteButton id={id} />
    </div>
  );
};
export default ProductPage;
