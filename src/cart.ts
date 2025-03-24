"use client";

import { create } from "zustand";
import { ActionType, CartItem } from "./type";
import { persist } from "zustand/middleware";

type Store = {
  products: CartItem[];
  totalQuantity: number;
  totalPrice: number;
};

export const useStore = create<Store & ActionType>()(
  persist(
    (set, get) => ({
      products: [],
      totalQuantity: 0,
      totalPrice: 0,
      addToCart: (item) => {
        set((prev) => {
          const exist = prev.products.find((product) => product.id === item.id);
          if (exist) {
            return {
              products: prev.products.map((product) =>
                product.id === item.id
                  ? {
                      ...product,
                      quantity: product.quantity + item.quantity,
                      price: product.price + item.price,
                    }
                  : product
              ),
              totalQuantity: prev.totalQuantity + item.quantity,
              totalPrice: prev.totalPrice + item.price,
            };
          }
          return {
            products: [...prev.products, item],
            totalQuantity: prev.totalQuantity + item.quantity,
            totalPrice: prev.totalPrice + item.price,
          };
        });
      },
      removeFromCart: (item) => {
        set((prev) => {
          return {
            products: prev.products.filter((product) => product.id !== item.id),
            totalQuantity: prev.totalQuantity - item.quantity,
            totalPrice: prev.totalPrice - item.price,
          };
        });
      },
    }),
    { name: "cart" }
  )
);
