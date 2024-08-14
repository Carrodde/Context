import { Cart } from "../models/Cart";
interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
  REMOVED,
  INCREASED,
  DECREASED,
}

export const CartReducer = (carts: Cart[], action: IAction): Cart[] => {
  switch (action.type) {
    case ActionType.ADDED:
      return [...carts, new Cart(action.payload)];

    case ActionType.REMOVED:
      return carts.filter((cartItem) => cartItem.id !== +action.payload);

    case ActionType.INCREASED:
      return carts.map((cartItem) => {
        if (cartItem.id === +action.payload)
          return { ...cartItem, amount: cartItem.amount + 1 };
        return cartItem;
      });

    case ActionType.DECREASED:
      return carts.map((cartItem) => {
        if (cartItem.id === +action.payload)
          return { ...cartItem, amount: cartItem.amount - 1 };
        return cartItem;
      });

    default:
      return carts;
  }
};
