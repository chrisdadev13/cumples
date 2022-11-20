import React, { useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity } from "../redux/cart";
import { useSelector } from "react-redux";

const Main = () => {
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [product, setProduct] = useState({});

  const previusData = useRef({ men, women });

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => setMen(json));
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => setWomen(json));
  }, []);

  useEffect(() => {
    if (
      previusData.current.men !== men &&
      previusData.current.women !== women
    ) {
      setData([...men, ...women]);
    }
  }, [men, women]);

  const handleAddToCart = (event) => {
    const direction = parseInt(event.target.getAttribute("data"));
    setProduct(data[direction]);
    setProduct((current) => {
      return {
        ...current,
        quantity: 1,
      };
    });
    if (Object.keys(product).length !== 0) dispatch(addToCart(product));
  };

  const handleAddItem = (event) => {
    const direction = parseInt(event.target.id);
    const item = cart[direction];
    dispatch(incrementQuantity(item));
  };

  const handleRestItem = (event) => {
    const direction = parseInt(event.target.id);
    const item = cart[direction];
    dispatch(decrementQuantity(item));
  };

  return (
    <Box>
      <Box w="full" shadow="md" px="40" mb="20">
        <Navbar />
      </Box>
      <Routes>
        <Route
          path="/"
          element={<Store inventory={data} addToCart={handleAddToCart} />}
        />
        <Route
          path="/Cart"
          element={
            <Cart
              cart={cart}
              onClickAdd={handleAddItem}
              onClickRest={handleRestItem}
            />
          }
        />
      </Routes>
    </Box>
  );
};

export default Main;
