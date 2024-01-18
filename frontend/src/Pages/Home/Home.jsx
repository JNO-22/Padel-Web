import Salon from "./components/Salon/Salon";
import Presentacion from "./components/Presentacion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Grid, GridItem, Heading, Button, Text } from "@chakra-ui/react";

function Home() {
  // Time for animation
  const [img, setimg] = useState(true);
  const imagenP =
    "https://padelcreations.b-cdn.net/wp-content/uploads/2021/02/Padel-Court-Mod.-VINTAGE-2.jpg";
  const imagenS =
    "https://cdn0.casamientos.com.ar/vendor/3990/3_2/960/jpg/cabo-largo-6_7_113990.jpeg";

  useEffect(() => {
    const interval = setInterval(() => {
      setimg(!img);
      console.log(img);
    }, 6000);

    return () => clearInterval(interval);
  });

  return (
    <Box overflow={"hidden"} display={"flex"} flexDirection={"column"} mt={10}>
      <Box padding={"2em"} boxSizing={"border-box"}>
        <Grid templateColumns={"1fr 1fr"} gap={4}>
          <GridItem
            alignSelf={"end"}
            justifySelf={"center"}
            display={"flex"}
            flexDirection={"column"}
          >
            {img ? (
              <Heading fontSize={{ base: "3xl", md: "5xl", sm: "2xl" }}>
                <Text>
                  <Text as={"span"} color={"brand.green"}>
                    JUEGA{" "}
                  </Text>
                  Y CELEBRA <br />
                  EN UN SOLO LUGAR
                </Text>
              </Heading>
            ) : (
              <Heading fontSize={{ base: "3xl", md: "5xl" }}>
                <Text>
                  JUEGA Y{" "}
                  <Text as={"span"} color={"brand.blue"}>
                    CELEBRA
                  </Text>
                  <br />
                  EN UN SOLO LUGAR
                </Text>
              </Heading>
            )}
            <Button variant={"Home"} marginTop={"100px"}>
              <Link to={"/alquiler"}>RESERVAR</Link>
            </Button>
          </GridItem>
          <GridItem
            h="500px"
            borderRadius={"md"}
            backgroundImage={`url(${img ? imagenP : imagenS})`}
            backgroundSize={"cover"}
            backgroundRepeat={"no-repeat"}
            animation={"pulsate 20s linear infinite"}
          />
        </Grid>
      </Box>
      <Box>
        <Presentacion />
        <Salon />
      </Box>
    </Box>
  );
}

export default Home;
