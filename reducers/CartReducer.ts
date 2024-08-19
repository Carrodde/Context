
import { Cart } from "../src/models/Cart";
interface IAction {
    type: ActionType,
    payload: string,
}

export enum ActionType {
    ADDED,
    REMOVED,
    INCREASED,
    DECREASED
}

export const CartReducer = (carts: Cart[], action: IAction): Cart[] => {
    switch (action.type) {
        case ActionType.ADDED:
            return [...carts, new Cart(action.payload))];


            case ActionType.REMOVED:
            return ;

            case ActionType.INCREASED:
            return ;

            case ActionType.DECREASED:
            return ;

            default:
                return carts;
    }
}