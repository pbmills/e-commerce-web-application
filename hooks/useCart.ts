import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => setCart((prev) => [...prev, product]);
  const removeFromCart = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));

  return { cart, addToCart, removeFromCart };
};

export default useCart;