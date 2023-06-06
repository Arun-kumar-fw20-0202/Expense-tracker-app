import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex
        padding={"20px 30px"}
        minH={"80px"}
        align={"center"}
        justify={"end"}
      >
        <Flex gap={"50px"} className="links">
          <Link to="/">Deshboard</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </Flex>
      </Flex>
    </>
  );
}
