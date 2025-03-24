export type Product = {
  id: string;
  title: string;
  image: string;
  desc: string;
  price: number;
  catagory: string;
  options?: { title: string; price: number }[];
};

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  option: string;
};

export type ActionType = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
};
