import React, { useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Switch } from "react-router";
import Navbar from "./Navbar";
import Store from "./pages/Store";
import Cart from "./pages/Cart";

const Main = () => {
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [product, setProduct] = useState({});

  const previusData = useRef({ men, women });

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

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(cart));
  }, [cart]);

  const alreadyOnCart = (cart, product) => {
    return cart.some((item) => item.id === product.id);
  };

  const addToCart = (event) => {
    const direction = parseInt(event.target.getAttribute("data"));
    setProduct(data[direction]);
    setProduct((current) => {
      return {
        ...current,
        quantity: 1,
      };
    });

    if (alreadyOnCart(cart, product)) {
      let direction = cart.findIndex((item) => item.id === product.id);
      cart[direction].quantity += 1;
      setTotal(total + cart[direction].price * cart[direction].quantity);
    } else {
      setCart([...cart, product]);
      setTotal(total + product.price);
    }
    console.log("Hola");
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Box>
      <Box w="full" shadow="md" px="40" mb="20">
        <Navbar />
      </Box>
      <Routes>
        <Route
          path="/"
          element={<Store inventory={data} addToCart={addToCart} />}
        />
        <Route path="/Cart" element={<Cart cart={cart} />} />
      </Routes>
      <p style={{ marginLeft: "20px" }}>{Math.trunc(total)}</p>
    </Box>
  );
};

export default Main;
