import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartItems } from "./CartItems";

export const DisplayCart = () => {
  const { cart, add } = useContext(CartContext);

  return (
    <>
      <ul>
        {cart.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem}></CartItems>
        ))}
      </ul>
      <button onClick={add}>Lägg till</button>
    </>
  );
};
