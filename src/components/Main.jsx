import react from "react";
import { Box, Container } from "@chakra-ui/react";
import { BsBag } from "react-icons/bs";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./pages/Homepage";

const Main = () => {
  return (
    <Box>
      <Box w="full" shadow="md" px="40" mb="20">
        <Navbar />
      </Box>
      <Box px="40">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Main;
