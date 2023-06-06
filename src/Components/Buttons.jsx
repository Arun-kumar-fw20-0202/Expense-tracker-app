import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Buttons = () => {
  return (
    <Flex
      minH={"0vh"}
      justify={"center"}
      padding={"20px 30px"}
      align={"center"}
      gap={"20px"}
    >
      <Link
        to="/"
        padding={"10px"}
        borderRadius={"5px"}
        loadingText="Submitting"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        Tracker
      </Link>
      <Link
        to="/analytics"
        padding={"10px"}
        borderRadius={"5px"}
        loadingText="Submitting"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        Analytics
      </Link>
      <Link
        to="/history"
        padding={"10px"}
        borderRadius={"5px"}
        loadingText="Submitting"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        History
      </Link>
    </Flex>
  );
};
