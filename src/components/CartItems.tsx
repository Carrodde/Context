import { useContext } from "react";
import { Cart } from "../models/cart";
import { CartContext } from "../context/CartContext";

interface ICartProps {
  cartItem: Cart;
}

export const CartItems = ({ cartItem }: ICartProps) => {
  const { remove, increase, decrease } = useContext(CartContext);

  return (
    <>
      <li>
        {cartItem.amount} st {cartItem.item}{" "}
      </li>
      <button onClick={() => increase(cartItem.id)}>Öka antal</button>
      <button onClick={() => decrease(cartItem.id)}>Minska Antal</button>

      <button onClick={() => remove(cartItem.id)}>Ta bort</button>
    </>
  );
};
