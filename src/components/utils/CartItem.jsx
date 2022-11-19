import React from "react";
import {
  Box,
  Container,
  Text,
  Avatar,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const CartItem = ({ product, key }) => {
  return (
    <Box display="flex">
      <Container>
        <Avatar src={product.image} />
      </Container>
      <Text>{product.title}</Text>
    </Box>
  );
};

export default CartItem;
