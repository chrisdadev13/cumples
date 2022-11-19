import React from "react";
import { Grid, Heading, Box } from "@chakra-ui/react";
import ProductCard from "../utils/Card";

const Store = ({ inventory, addToCart }) => {
  return (
    <>
      <Heading as="h2" px="44" mb="5">
        Store
      </Heading>
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
        {inventory.map((product, index) => (
          <ProductCard
            product={product}
            key={index}
            index={index}
            onCardClick={addToCart}
          />
        ))}
      </Grid>
    </>
  );
};

export default Store;
