import {
  FaBaseball,
  FaBuildingCircleCheck,
  FaBuildingShield,
} from "react-icons/fa6";

import {
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const texto = [
  {
    icon: <FaBaseball size={"4em"} color="#f2f2f2" />,
    title: "Diversion y deporte",
    text: "Disfruta de pádel y fiesta en un mismo lugar, con una cancha de calidad y un salón equipado para tu evento especial.",
    color: "#55E951",
  },
  {
    icon: <FaBuildingCircleCheck size={"4em"} color="#f2f2f2" />,
    title: "Ubicación estratégica y accesible",
    text: "Alquila una cancha de pádel y un salón de fiestas en una zona céntrica, con fácil acceso y estacionamiento.",
    color: "#FF6788",
  },

  {
    icon: <FaBuildingShield size={"4em"} color="#f2f2f2" />,
    title: "Seguridad y limpieza",
    text: "Contas con seguridad y limpieza garantizadas, cumpliendo con todas las normas de higiene y seguridad incluido.",
    color: "#00eeff",
  },
];

const Presentacion = () => {
  return (
    <Box
      overflow={"hidden"}
      display={"flex"}
      flexDirection={"column"}
      backgroundColor={"#fdfdfd"}
      padding={"2em"}
    >
      <Grid padding={"2em"} templateColumns={"repeat(3, 1fr)"} gap={10}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Card
            key={i}
            h={"350px"}
            w={"100%"}
            borderRadius={"15px"}
            transition={"all 0.4s ease-in"}
            _hover={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <CardBody
              h={"100%"}
              display={"flex"}
              flexDirection={"column"}
              gap={10}
              justifyContent={"center"}
            >
              <Box
                display={"flex"}
                backgroundColor={texto[i].color}
                borderRadius={"50%"}
                p={4}
                alignSelf={"center"}
              >
                {texto[i].icon}
              </Box>
              <Stack gap={6} textAlign={"center"}>
                <Heading size={"md"} fontWeight={"600"} w={"100%"}>
                  {texto[i].title}
                </Heading>
                <Text
                  fontSize={"sm"}
                  color={"gray.500"}
                  lineHeight={"24px"}
                  px={"20px"}
                  fontWeight={"500"}
                  m={"auto"}
                >
                  {texto[i].text}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default Presentacion;
