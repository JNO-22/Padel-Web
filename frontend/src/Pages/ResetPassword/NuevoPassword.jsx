import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";

const NuevoPassword = () => {
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
        maxW={"3xl"}
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
            Restablece tu contraseña
          </Heading>
          <FormControl mt={10}>
            <FormLabel fontWeight={"bold"} fontSize={"lg"}>
              Ingresa tu nueva contraseña
            </FormLabel>
            <Input type="password" placeholder="Nueva contraseña" isRequired />
          </FormControl>
          <FormControl mt={10}>
            <FormLabel fontWeight={"bold"} fontSize={"lg"}>
              Confirma tu contraseña
            </FormLabel>
            <Input
              type="password"
              placeholder="Confirmar contraseña"
              isRequired
            />
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

export default NuevoPassword;
