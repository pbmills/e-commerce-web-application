import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface Cart {
  id: number;
  qty: number;
}

interface CountContextType {
  cartQty: number;
  addToCart: (e: Cart) => void;
}

// Create the context with default values
const CountContext = createContext<CountContextType | undefined>(undefined);

export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

interface CountProviderProps {
  children: ReactNode;
}

export const CountProvider = ({ children }: CountProviderProps) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [cartQty, setCartQty] = useState<number>(0);

  // Update cartQty whenever cart changes
  useEffect(() => {
    setCartQty(cart.reduce((total, item) => (total += item.qty), 0));
  }, [cart]);

  const addToCart = (newItem: Cart) => {
    setCart((prev) => {
      const existingItemIndex = prev.findIndex((c) => c.id === newItem.id);

      if (existingItemIndex > -1) {
        // If the item already exists, update its qty
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].qty += newItem.qty; // Add qty to existing item
        return updatedCart;
      } else {
        // If item doesn't exist, add a new one
        return [...prev, newItem];
      }
    });
  };

  return (
    <CountContext.Provider value={{ cartQty, addToCart }}>
      {children}
    </CountContext.Provider>
  );
};
