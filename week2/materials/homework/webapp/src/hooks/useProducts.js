import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

function useProducts() {
  const { data: productsData } = useFetch(`/products`);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    productsData &&
      setProducts(
        productsData.map((item) => {
          return { ...item, selected: false };
        })
      );
  }, [productsData]);

  const addProduct = (product) => {
    let newCart = cart.concat(product);
    setCart(newCart);
  };

  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const calculateSum = () => {
    return cart.reduce((acc, value) => {
      return (acc += Number(value.price));
    }, 0);
  };

  useEffect(() => {
    setSum(calculateSum());
  }, [cart]);

  return { products, cart, addProduct, removeProduct, sum };
}

export default useProducts;
