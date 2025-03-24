import { projectUrl } from "@/data";
import { Catagory } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const data = await fetch(`${projectUrl}/api/catagory`);
  if (!data.ok) {
    return;
  }
  return data.json();
};

const Menu = async () => {
  const MenuItem: Catagory[] = await getData();
  return (
    <div className="w-full md:h-[calc(100vh-224px)] flex-col flex justify-center items-center py-12 md:flex-row">
      {MenuItem.map((item, index) => (
        <Link
          href={`/menu/${item.slug}`}
          key={index}
          style={{
            backgroundColor: item.color,
          }}
          className={`${
            item.color !== "white" && "text-white"
          } w-[80vw] h-[35vh] flex flex-col justify-center px-10 relative md:h-[50vh] gap-2`}
        >
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover hover:scale-125 transition-all"
          />
          <p className="z-10 text-xl uppercase font-bold">{item.title}</p>
          <p className="z-10 max-w-1/2">{item.desc}</p>
          <button
            className={`hidden w-fit lg:flex py-2 px-4 hover:cursor-pointer z-10 rounded-xl ${
              item.color === "white"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Explore
          </button>
        </Link>
      ))}
    </div>
  );
};
export default Menu;
