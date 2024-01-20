import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Alerta from "../../Components/Alerta/Alerta";
import clienteAxios from "../../config/clienteAxios";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar formulario antes de enviarlo
    if (password !== repetirPassword) {
      setAlerta({ error: true, msg: "Las contraseñas no coinciden" });
      return;
    } else if (password.length < 6) {
      setAlerta({
        error: true,
        msg: "La contraseña debe tener al menos 6 caracteres",
      });
      return;
    }

    // Llamada al backend para registrar el usuario

    try {
      const { data } = await clienteAxios.post(`/usuario/crear`, {
        nombre,
        email,
        password,
      });
      setAlerta({
        error: false,
        msg: data.msg,
      });

      // Limpiar formulario
      setNombre("");
      setEmail("");
      setPassword("");
      setRepetirPassword("");
    } catch (error) {
      setAlerta({
        error: true,
        msg: error.response.data.msg,
      });
    }
  };
  return (
    <Grid templateColumns={"3fr 5fr"} h={"100vh"} justifyContent={"center"}>
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
          w={"80%"}
        >
          <Heading> Ya tienes una cuenta?. </Heading>
          <Text>Puedes iniciar secion con tus credenciales aqui </Text>
        </Box>
        <Box>
          <ChakraLink variant={"Outline"} as={RouterLink} to="/login">
            INICIAR SESION
          </ChakraLink>
        </Box>
      </GridItem>
      <GridItem m={"auto"} w={"60%"}>
        <form onSubmit={handleSubmit}>
          <Heading fontWeight={"bold"} textAlign={"center"} color={"brand.green"} mb={10}>
            Crea tu cuenta
          </Heading>

          {alerta.msg && <Alerta alerta={alerta} />}

          <FormControl mb={4}>
            <FormLabel fontWeight={"bold"}> Nombre</FormLabel>
            <Input
              type="text"
              placeholder="Nombre del usuario"
              isRequired
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel fontWeight={"bold"}> Email</FormLabel>
            <Input
              type="email"
              placeholder="Email de tu cuenta"
              isRequired
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4} isInvalid={alerta.error === 1 || alerta.error === 2}>
            <FormLabel fontWeight={"bold"}> Contraseña </FormLabel>
            {alerta.error === 1 || alerta.error === 2 ? (
              <FormErrorMessage>{alerta.msg}</FormErrorMessage>
            ) : null}

            <Input
              id="password"
              type="password"
              placeholder="Contraseña"
              isRequired
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel fontWeight={"bold"} mt={4}>
              Confirmar contraseña
            </FormLabel>
            <Input
              id="repetirPassword"
              type="password"
              placeholder="Confirmar contraseña"
              isRequired
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
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
              REGISTRARSE
            </Button>
          </Box>
        </form>
      </GridItem>
    </Grid>
  );
};

export default Registrar;
