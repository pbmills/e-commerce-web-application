import { useState } from "react";

interface Props {
  id: number;
  qty: number;
}

const useCart = () => {
  // Initialize cart as an empty array of Props objects
  const [cart, setCart] = useState<Props[]>([]);

  // Add item to cart
  const addToCart = (id: number, qty: number) => {
    setCart((prev) => [...prev, { id: id, qty: qty }]);
  };

  // Remove item from cart by id
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return { cart, addToCart, removeFromCart };
};

export default useCart;
