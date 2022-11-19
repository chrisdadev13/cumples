import React, { useState, useContext, useEffect } from "react";
import {
  Avatar,
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <Box px="40">
      <Heading>Cart</Heading>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart?.map((item) => (
              <Tr>
                <Td display="flex" alignItems="center">
                  <Avatar src={item.image} mr="3" />
                  <Text>{item.title}</Text>
                </Td>
                <Td>
                  <Text>${item.price}</Text>
                </Td>
                <Td>
                  <NumberInput size="xs" maxW={16} defaultValue={item.quantity}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td>
                  <Text>${item.price * item.quantity}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Cart;
