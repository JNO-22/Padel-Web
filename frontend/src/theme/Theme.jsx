import { defineStyle, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/montserrat";
import "@fontsource/hind";

const Link = defineStyle({
  baseStyle: {
    _hover: {
      textDecoration: "none",
    },
  },
  variants: {
    White: {
      backgroundColor: "#fdfdfd",
      color: "#55e951",
      fontWeight: "bold",
      padding: "12px 24px",
      fontSize: "lg",
      letterSpacing: "1px",
      borderRadius: "40px",
      transition: "all 0.3s ease",
    },
    Green: {
      backgroundColor: "#55e951",
      color: "#fdfdfd",
      fontWeight: "bold",
      padding: "12px 24px",
      fontSize: "lg",
      letterSpacing: "1px",
      borderRadius: "40px",
      transition: "all 0.3s ease",
      _hover: {
        transform: "translateY(-2px)",
      },
    },
    Outline: {
      color: "#fdfdfd",
      backgroundColor: "#55e951",
      outline: "2px solid #fdfdfd",
      fontWeight: "bold",
      padding: "12px 24px",
      letterSpacing: "1px",
      borderRadius: "40px",
      transition: "all 0.3s ease",
      _hover: {
        transform: "translateY(-2px)",
      },
    },
  },
});

const Button = defineStyle({
  baseStyle: {
    borderRadius: "15px",
    fontWeight: "bold",
    outline: "none",
    border: "none",
    _active: {
      transform: "translateY(2px)",
      boxShadow: " 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    },
  },
  variants: {
    Home: {
      bg: "#55e951",
      color: "white",
      height: "60px",
      width: "150px",
      alignSelf: "end",
      padding: "12px 24px",
      letterSpacing: "2px",
      transition: "all 0.3s ease",
      _hover: {
        boxShadow: " rgba(0, 0, 0, 0.25) 4px 8px 8px",
      },
    },
    Login: {
      backgroundColor: "#fdfdfd",
      padding: "0 3em",
      borderRadius: "40px",
      color: "#55e951",
    },
    NavBar: {
      borderRadius: "0px",
      backgroundColor: "transparent",
      _active: {
        transform: "none",
        boxShadow: "0",
      },
    },
  },
});

const Theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  components: {
    Button,
    Link,
  },

  fonts: {
    heading: "Montserrat Variable, sans-serif",
    body: `" Hind", sans-serif`,
  },
  colors: {
    brand: {
      black: "#1b1b1b",
      white: "#fdfdfd",
      green: "#55e951",
      blue: "#00eeff",
      red: "#ff0000",
    },
  },
});

export default Theme;
