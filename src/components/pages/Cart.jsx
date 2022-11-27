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
  Button,
  Tfoot,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Cart = ({ onClickAdd, onClickRest }) => {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState();

  const getTotal = () => {
    let priceSum = 0;
    let quantity = 0;
    for (let i = 0; i < cart.length; i++) {
      priceSum += cart[i].price;
    }
    for (let j = 0; j < cart.length; j++) {
      quantity += cart[j].quantity;
    }
    return priceSum * quantity;
  };
  return (
    <Box px={{ sm: 0, lg: 40, "2xl": 40, xl: 40 }}>
      <Heading>Cart</Heading>
      <TableContainer mt="5">
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
            {cart?.map((item, index) => (
              <Tr key={index}>
                <Td display="flex" alignItems="center">
                  <Avatar src={item.image} mr="3" />
                  <Text>{item.title}</Text>
                </Td>
                <Td>
                  <Text>${item.price}</Text>
                </Td>
                <Td>
                  <NumberInput
                    readOnly={true}
                    size="xs"
                    maxW={16}
                    defaultValue={item.quantity}
                    value={item.quantity}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper
                        bg="green.200"
                        children="+"
                        id={index}
                        onClick={onClickAdd}
                      />
                      <NumberDecrementStepper
                        bg="pink.200"
                        children="-"
                        id={index}
                        onClick={onClickRest}
                      />
                    </NumberInputStepper>
                  </NumberInput>
                </Td>
                <Td>
                  <Text>${Math.trunc(item.price * item.quantity)}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Text>
            {getTotal() === 0 ? " " : "Total: $" + Math.trunc(getTotal())}
          </Text>
        </Table>
      </TableContainer>
      <Button mt="5" onClick={() => console.log(cart)} colorScheme={"purple"}>
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;
