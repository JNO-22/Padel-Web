import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  return (
    <Grid templateColumns={"5fr 3fr"} h={"100vh"} justifyContent={"center"}>
      <GridItem m={"auto"} w={"60%"}>
        <form>
          <Heading fontWeight={"bold"} textAlign={"center"} color={"brand.green"} mb={10}>
            ENTRA A TU CUENTA
          </Heading>
          <FormControl>
            <FormLabel fontWeight={"bold"} fontSize={"lg"}>
              Email
            </FormLabel>
            <Input type="email" placeholder="Email del usuario" isRequired />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel fontWeight={"bold"} fontSize={"lg"}>
              Contraseña
            </FormLabel>
            <Input type="password" placeholder="Contraseña" isRequired />
          </FormControl>
          <Stack mt={4} direction={"row"} justifyContent={"space-around"}>
            <Checkbox>Recordarme</Checkbox>
            <ChakraLink as={RouterLink} to={"/reset-password"}>
              Olvide mi contraseña
            </ChakraLink>
          </Stack>
          <Box mt={4} display={"flex"} justifyContent={"center"}>
            <Button
              variant={"Login"}
              type="submit"
              mt={4}
              backgroundColor={"brand.green"}
              color={"brand.white"}
            >
              INICIAR SESION
            </Button>
          </Box>
        </form>
      </GridItem>
      <GridItem
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"brand.green"}
        gap={6}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          alignItems={"center"}
          color={"brand.white"}
          fontSize={"lg"}
          gap={10}
        >
          <Heading> CREA TU CUENTA </Heading>
          <Text w={"80%"}>Registrate para poder reservar fácilmente y disfrutar de beneficios</Text>
        </Box>
        <Box>
          <ChakraLink variant={"Outline"} as={RouterLink} to={"/register"}>
            REGISTRARSE
          </ChakraLink>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Login;
