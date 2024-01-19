import React from "react";
import { Text, Box } from "@chakra-ui/react";

const Alerta = ({ alerta }) => {
  const { msg, error } = alerta;
  return (
    <Box w={"100%"} mb={8}>
      {error ? (
        <Text
          fontSize={"lg"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"brand.white"}
          backgroundColor={"brand.red"}
          p={4}
          borderRadius={"md"}
        >
          {msg}
        </Text>
      ) : (
        <Text
          fontSize={"lg"}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"brand.white"}
          backgroundColor={"brand.blue"}
          p={4}
          borderRadius={"md"}
        >
          {msg}
        </Text>
      )}
    </Box>
  );
};

export default Alerta;
