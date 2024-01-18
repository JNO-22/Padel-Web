import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Container,
} from "@chakra-ui/react";

const OlvidePassword = () => {
  return (
    <Box
      h={"100vh"}
      w={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"brand.blue"}
    >
      <Container
        w={"100%"}
        p={50}
        boxShadow={"lg"}
        rounded={"lg"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        backgroundColor={"brand.white"}
      >
        <form>
          <Heading
            fontWeight={"bold"}
            textAlign={"center"}
            color={"brand.green"}
            mb={4}
          >
            Olvidaste tu contraseña?
          </Heading>
          <Text textAlign={"center"}>
            Cambiar tu contraseña para recuperar tu cuenta
          </Text>
          <FormControl mt={10}>
            <FormLabel fontWeight={"bold"} fontSize={"lg"}>
              Email
            </FormLabel>
            <Input type="email" placeholder="Email del usuario" isRequired />
          </FormControl>
          <Box mt={4} display={"flex"} justifyContent={"center"}>
            <Button
              variant={"Login"}
              type="submit"
              mt={4}
              backgroundColor={"brand.green"}
              color={"brand.white"}
            >
              ENVIAR CORREO
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default OlvidePassword;
