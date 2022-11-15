import react from "react";
import {
  Link,
  Center,
  Text,
  Box,
  Container,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { BsBag } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <Center display="flex" alignItems="center" justifyContent="center" py="2">
      <Box>
        <Link style={{ textDecoration: "none" }}>
          <Heading
            as="h2"
            fontFamily="unset"
            fontWeight="extrabold"
            fontSize="3xl"
          >
            cumple<span style={{ color: "#7e6ee6" }}>.</span>
          </Heading>
        </Link>
      </Box>
      <Spacer />
      <Box display="flex">
        <Link mx="5">
          <Text>Store</Text>
        </Link>
        <Link mr="3">
          <Text display="flex" alignItems="center">
            Cart <BsBag style={{ marginLeft: "3px" }} />
          </Text>
        </Link>
        <Link>
          <Text display="flex" alignItems="center">
            Github <FaGithub style={{ marginLeft: "3px" }} />
          </Text>
        </Link>
      </Box>
    </Center>
  );
};

export default Navbar;
