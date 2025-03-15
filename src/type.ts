export type Product = {
  id: number;
  title: string;
  image: string;
  desc: string;
  price: number;
  catagory: "pizza" | "burger" | "pasta";
  options?: { title: string; price: number }[];
};
