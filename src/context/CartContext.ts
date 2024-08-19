import { createContext } from "react";
import { Cart } from "./models/cart";

export interface ICartContext {
  cart: Cart[];
  add: () => void;
  remove: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  add: () => {},
  remove: () => {},
  increase: () => {},
  decrease: () => {},
});
