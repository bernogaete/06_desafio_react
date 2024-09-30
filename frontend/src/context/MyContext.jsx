import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  // Función para agregar al carrito
  const addToCart = (pizza) => {
    const index = cart.findIndex((item) => item.id === pizza.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].count++;
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...pizza, count: 1 }];
      setCart(newCart);
    }
  };

  // Función para disminuir la cantidad
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  
  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (total, pizza) => total + pizza.price * pizza.count,
      0
    );
    const newQuantity = cart.reduce((total, pizza) => total + pizza.count, 0);

    setTotalPrice(newTotalPrice);
    setQuantity(newQuantity);
  }, [cart]); // 
  return (
    <MyContext.Provider
      value={{ cart, addToCart, decreaseQuantity, totalPrice, quantity }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default CartProvider;
