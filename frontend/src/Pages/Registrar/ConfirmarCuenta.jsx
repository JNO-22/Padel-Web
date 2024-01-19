import { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import axios, { CanceledError } from "axios";
import Alerta from "../../Components/Alerta/Alerta";
import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";

const ConfirmarCuenta = () => {
  const params = useParams();
  const [alerta, setAlerta] = useState({});
  const [confirmado, setConfirmado] = useState(false);
  const { id } = params;

  useEffect(() => {
    const abortController = new AbortController();
    const confirmarCuenta = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/usuario/confirmar/${id}`;
        const { data } = await axios(url, { signal: abortController.signal });
        setAlerta({ error: false, msg: data.msg });
        setConfirmado(true);
      } catch (error) {
        setAlerta({ error: true, msg: error.response.data.msg });
        if (error instanceof CanceledError) return;
      }
    };
    confirmarCuenta();
    return () => abortController.abort();
  }, []);

  return (
    <Box
      h={"100vh"}
      w={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"#7FD1AE"}
    >
      <Box
        w={"60%"}
        h={"60vh"}
        backgroundColor={"brand.white"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"md"}
        boxShadow={"lg"}
        gap={10}
      >
        <Box w={"80%"}>{alerta.msg && <Alerta alerta={alerta} />}</Box>
        {confirmado && (
          <ChakraLink as={RouterLink} variant={"Green"} to="/login">
            <Text fontSize={"xl"}>Inicia sesión</Text>
          </ChakraLink>
        )}
      </Box>
    </Box>
  );
};

export default ConfirmarCuenta;
