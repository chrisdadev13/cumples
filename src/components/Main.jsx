import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  CardFooter,
  Button,
  Divider,
  Heading,
  ButtonGroup,
  Grid,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./pages/Homepage";
import ProductCard from "./utils/Card";

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
  };

  return (
    <Box>
      <Box w="full" shadow="md" px="40" mb="20">
        <Navbar />
      </Box>
      <Grid
        px={{ "2xl": "40", xl: "40", lg: "36", md: "36", sm: "30" }}
        templateRows="repeat(2, 1fr)"
        templateColumns={{
          xl: "repeat(5, 1fr)",
          lg: "repeat(4, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(1, 1fr)",
        }}
        gap="2"
      >
        {data.map((product, index) => (
          <ProductCard
            product={product}
            index={index}
            onCardClick={addToCart}
          />
        ))}
      </Grid>
      <p style={{ marginLeft: "20px" }}>{Math.trunc(total)}</p>
    </Box>
  );
};

export default Main;
