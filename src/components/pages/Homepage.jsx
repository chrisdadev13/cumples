import React from "react";
import {
  Container,
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Heading fontSize="3xl" fontFamily="sans-serif">
        Categories
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="20" mt="10">
        <GridItem
          h="52"
          w="96"
          bgGradient="linear(red.100 0%, #fcd393 25%, #f87e7e 50%)"
          borderRadius="xl"
          p="20"
          color="white"
        >
          <Heading>Women's clothing</Heading>
        </GridItem>
        <GridItem
          h="52"
          w="96"
          bgGradient="linear(blue.700 0%, yellow.100 25%, #7e6ee6 50%)"
          borderRadius="xl"
          p="20"
          color="white"
        >
          <Heading ml="1">Men's clothing</Heading>
        </GridItem>
        <GridItem
          h="52"
          w="96"
          bgGradient="linear(yellow.200 0%, yellow.100 25%, #fcd393 50%)"
          borderRadius="xl"
          p="20"
          color="white"
        >
          <Heading ml="1">Jewelery</Heading>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Homepage;
