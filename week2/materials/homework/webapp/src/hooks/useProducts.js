import { useState, useEffect } from "react";

const productsData = [
  {
    id: 1,
    name: "Fruits",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Wonderful fruits from all over the world",
    price: "50",
    currency: "DKK",
  },
  {
    id: 2,
    name: "Vegetables",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Wonderful vegetables from all over the world",
    price: "50",
    currency: "DKK",
  },
  {
    id: 3,
    name: "Juice Box",
    imageURL:
      "https://www.kirbysproduce.com/wp-content/uploads/2020/04/produce-box.jpg",
    description: "Great box for your juicer",
    price: "50",
    currency: "DKK",
  },
];

let initialProducts = productsData.map((item) => {
  return { ...item, selected: false };
});

function useProducts() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);

  const addProduct = (product) => {
    let newCart = cart.concat(product);
    setCart(newCart);
  };

  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const calculateSum = () => {
      return cart.reduce((acc, value) => {
        return acc += Number(value.price)
      },
      0
  )};
  
  useEffect(() => {
    setSum(calculateSum());
  }, [cart])

  return { products, cart, addProduct, removeProduct, sum };
}

export default useProducts;
