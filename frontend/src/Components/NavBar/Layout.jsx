import { Outlet, Link as RouterLink } from "react-router-dom";
import { Flex, Button, Image, Link as ChakraLink } from "@chakra-ui/react";
import logo from "../../Images/logo-base1.jpg";
const Layout = () => {
  return (
    <Flex minH="100vh">
      <Flex
        position={"fixed"}
        top={0}
        bg={"brand.white"}
        zIndex={100}
        w={"100%"}
        h={"10vh"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={8}
      >
        <ChakraLink as={RouterLink} to="/">
          <Button
            leftIcon={<Image src={logo} boxSize={20} />}
            variant={"NavBar"}
          />
        </ChakraLink>
        <Flex gap={4}>
          <ChakraLink as={RouterLink} to="/login">
            <Button variant={"NavBar"}> Log in </Button>
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/register">
            <Button
              variant={"NavBar"}
              border={"2px solid #55e951"}
              color={"brand.green"}
            >
              Register
            </Button>
          </ChakraLink>
        </Flex>
      </Flex>
      <Flex minH={"90vh"} w={"100%"}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
