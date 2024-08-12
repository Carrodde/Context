import { useState } from "react";
import "./App.css";
import { CartContext, ICartContext } from "./context/CartContext";
import { Cart } from "./models/cart";
import { DisplayCart } from "./components/DisplayCart";

function App() {
  const [cart, setCart] = useState<ICartContext>({
    cart: JSON.parse(localStorage.getItem("cartItems") || "{cart: []}").cart,
    add: () => {},
    remove: () => {},
    increase: () => {},
    decrease: () => {},
  });

  cart.add = () => {
    const addToCart = {
      ...cart,
      cart: [...cart.cart, new Cart(2, "Päron", 1)],
    };
    setCart(addToCart);
    localStorage.setItem("cartItems", JSON.stringify(addToCart));
  };

  cart.remove = (id: number) => {
    const removeFromCart = {
      ...cart,
      cart: cart.cart.filter((cart) => cart.id !== id),
    };
    setCart(removeFromCart);
    localStorage.setItem("cartItems", JSON.stringify(removeFromCart));
  };

  cart.increase = (id: number) => {
    const increaseAmount = {
      ...cart,
      cart: cart.cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      }),
    };
    setCart(increaseAmount);
    localStorage.setItem("cartItems", JSON.stringify(increaseAmount));
  };

  cart.decrease = (id: number) => {
    const decreaseAmount = {
      ...cart,
      cart: cart.cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      }),
    };
    setCart(decreaseAmount);
    localStorage.setItem("cartItems", JSON.stringify(decreaseAmount));
  };

  // const handleBirthday = (person: Person) => {
  //   setPersons(
  //     persons.map((p) => {
  //       if (p.name === person.name) {
  //         return { ...p, age: p.age + 1 };
  //       } else {
  //         return p;
  //       }
  //     })
  //   );
  // };

  return (
    <>
      <CartContext.Provider value={cart}>
        <DisplayCart></DisplayCart>
      </CartContext.Provider>
    </>
  );
}

export default App;
