import { FormEvent, useReducer, useState } from "react";
import { ActionType, CartReducer } from "../reducers/CartReducer";

export const DisplayCart = () => {
  const [carts, dispatch] = useReducer(CartReducer, []);

  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.ADDED,
      payload: userInput,
    });
  };

  const handleRemove = (id: number) => {
    dispatch({
      type: ActionType.REMOVED,
      payload: id.toString(),
    });
  };

  const handleIncrease = (id: number) => {
    dispatch({
      type: ActionType.INCREASED,
      payload: id.toString(),
    });
  };

  const handleDecrease = (id: number) => {
    dispatch({
      type: ActionType.DECREASED,
      payload: id.toString(),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Lägg till</button>
      </form>
      <ul>
        {carts.map((cartItem) => (
          <li key={cartItem.id}>
            {cartItem.amount} st {cartItem.item}
            <button onClick={() => handleIncrease(cartItem.id)}>
              Öka antal
            </button>
            <button onClick={() => handleDecrease(cartItem.id)}>
              Minska antal
            </button>
            <button onClick={() => handleRemove(cartItem.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </>
  );
};
