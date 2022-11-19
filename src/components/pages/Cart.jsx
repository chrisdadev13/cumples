import React from "react";
import {
  Avatar,
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const Cart = ({ cart }) => {
  return (
    <Box px="40">
      <Heading>Cart</Heading>
      <Box display="flex">
        <Grid gridTemplateColumns="repeat(4, 1fr)">
          {cart.map((product) => {
            <p>Hola</p>;
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Cart;
