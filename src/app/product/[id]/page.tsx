import Price from "@/components/Price";
import { Products } from "@/data";
import Image from "next/image";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const productId = Number((await params).id);
  console.log(typeof productId);
  const product = Products.find((item) => item.id === productId);
  console.log(product);
  if (!product) return;
  return (
    <div className="flex flex-col w-full md:flex-row py-10 px-6">
      <div className="relative w-full aspect-square md:w-1/2">
        <Image src={product.image} alt="" fill />
      </div>
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col gap-6 pt-10 lg:pt-30">
          <p className="uppercase font-bold text-2xl">{product.title}</p>
          <p className="text-wrap">{product.desc}</p>
          <Price
            price={product.price}
            id={product.id}
            options={product.options}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
