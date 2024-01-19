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
import { useEffect, useState } from "react";
import axios from "axios";
import Alerta from "../../Components/Alerta/Alerta";

const OlvidePassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Llamada al backend para enviar el email
    if (email === "" || email.length < 6) {
      setAlerta({ error: true, msg: "EL EMAIL ES OBLIGATORIO" });
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/usuario/reset-password`,
        { email }
      );

      setAlerta({ error: false, msg: data.msg });
    } catch (error) {
      setAlerta({ error: true, msg: error.response.data.msg });
    }
  };
  return (
    <Box
      h={"100vh"}
      w={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"brand.white"}
    >
      <Container
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        py={10}
      >
        {alerta.msg && <Alerta alerta={alerta} />}

        <form onSubmit={handleSubmit}>
          <Heading fontWeight={"bold"} textAlign={"center"} color={"brand.green"} mb={5}>
            Olvidaste tu contraseña?
          </Heading>
          <Text textAlign={"center"}>Cambiar tu contraseña para recuperar tu cuenta</Text>
          <FormControl mt={5}>
            <FormLabel fontWeight={"bold"} fontSize={"lg"}>
              Email
            </FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@ejemplo.com"
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

export default OlvidePassword;
