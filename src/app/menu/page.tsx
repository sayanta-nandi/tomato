import Image from "next/image";
import Link from "next/link";

type MenuType = {
  title: string;
  desc: string;
  color: string;
  image: string;
};

const MenuItem: MenuType[] = [
  {
    title: "pasta",
    desc: "A classic Italian dish made from durum wheat, served with a variety of delicious sauces like Alfredo, Marinara, or Pesto.",
    color: "green",
    image: "/pastaMenu.png",
  },
  {
    title: "burger",
    desc: "A mouthwatering sandwich consisting of a juicy patty, fresh veggies, and flavorful sauces, all stacked inside a soft bun.",
    color: "white",
    image: "/burgerMenu.png",
  },
  {
    title: "pizza",
    desc: "An oven-baked, cheesy delight topped with a variety of ingredients like vegetables, meats, and herbs on a crispy crust.",
    color: "red",
    image: "/pizzaMenu.png",
  },
];

const Menu = () => {
  return (
    <div className="w-full md:h-[calc(100vh-224px)] flex-col flex justify-center items-center py-12 md:flex-row">
      {MenuItem.map((item, index) => (
        <Link
          href={`/menu/${item.title}`}
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
