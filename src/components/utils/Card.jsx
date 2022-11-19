import React from "react";
import {
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
} from "@chakra-ui/react";

const ProductCard = ({ product, index, key, onCardClick }) => {
  return (
    <Card maxW="90%" maxH="7xl" shadow="lg" mx="2" key={index}>
      <CardBody>
        <Image
          src={product.image}
          alt={product.title}
          borderRadius="lg"
          w={{ "2xl": "52", xl: "36", lg: "36", md: "36", sm: "44" }}
        />
        <Stack mt="6" spacing="3">
          <Heading size={{ "2xl": "md", xl: "sm" }}>{product.title}</Heading>
          <Text
            noOfLines={[1, 2]}
            textTransform="capitalize"
            size={{ xl: "16" }}
          >
            {product.description}
          </Text>
          <Text color="blue.600">${product.price}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="ghost"
            colorScheme="blue"
            key={index}
            data={index}
            onClick={onCardClick}
          >
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
