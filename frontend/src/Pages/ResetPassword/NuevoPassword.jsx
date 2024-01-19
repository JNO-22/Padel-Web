import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import axios from "axios";
import Alerta from "../../Components/Alerta/Alerta";

const NuevoPassword = () => {
  const [tokenValido, setTokenValido] = useState(false);
  const [password, setPassword] = useState("");
  const [contraseñaModificada, setContraseñaModificada] = useState(false);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const comprobarToken = async () => {
      try {
        //TODO : Mover al cliente axios
        const url = `${import.meta.env.VITE_BACKEND_URL}/usuario/reset-password/${token}`;
        await axios(url, { signal: signal });
        setTokenValido(true);
      } catch (error) {
        setTokenValido(false);
        setAlerta({
          error: true,
          msg: error.response.data.msg,
        });
      }
    };
    comprobarToken();
    return () => controller.abort();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlerta({
        error: true,
        msg: "La contraseña debe tener al menos 6 caracteres",
      });
      return;
    }

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/usuario/reset-password/${token}`;
      const { data } = await axios.post(url, { password });
      console.log(data);
      setAlerta({
        error: false,
        msg: data.msg,
      });
      setContraseñaModificada(true);
    } catch (error) {
      setAlerta({
        error: true,
        msg: error.response.data.msg,
      });
    }
  };

  const { msg } = alerta;

  return (
    <Box
      h={"100vh"}
      w={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"#7FD1AE"}
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
        {msg && <Alerta alerta={alerta} />}
        {tokenValido && !contraseñaModificada && (
          <form onSubmit={handleSubmit}>
            <Heading fontWeight={"bold"} textAlign={"center"} color={"brand.green"} mb={4}>
              Restablece tu contraseña
            </Heading>
            <FormControl mt={10}>
              <FormLabel fontWeight={"bold"} fontSize={"lg"}>
                Ingresa tu nueva contraseña
              </FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nueva contraseña"
                isRequired
              />
            </FormControl>
            <FormControl mt={10}>
              <FormLabel fontWeight={"bold"} fontSize={"lg"}>
                Confirma tu contraseña
              </FormLabel>
              <Input type="password" placeholder="Confirmar contraseña" isRequired />
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
        )}

        {contraseñaModificada && (
          <ChakraLink as={RouterLink} variant={"Green"} to="/login">
            <Text fontSize={"xl"} textAlign={"center"}>
              Inicia sesión
            </Text>
          </ChakraLink>
        )}
      </Container>
    </Box>
  );
};

export default NuevoPassword;
