import { extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const theme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  colors: {
    black: "#0b0b0b",
    gray: {
      50: "#fdfdfd",
      100: "#f7f7f7",
      200: "#f0f0f0",
      300: "#e8e8e8",
      400: "#e1e1e1",
      500: "#d9d9d9",
      600: "#aeaeae",
      700: "#828282",
      800: "#575757",
      900: "#2b2b2b",
    },
    primary: {
      50: "#fdf3fd",
      100: "#f8d0f8",
      200: "#f0a1f0",
      300: "#e971e9",
      400: "#e142e1",
      500: "#da13da",
      600: "#ae0fae",
      700: "#830b83",
      800: "#570857",
      900: "#2c042c",
    },
    secondary: {
      50: "#f3fdfb",
      100: "#d0f7ee",
      200: "#a1f0dd",
      300: "#72e8cd",
      400: "#43e1bc",
      500: "#14d9ab",
      600: "#10ae89",
      700: "#0c8267",
      800: "#085744",
      900: "#042b22",
    },
    background: {
      50: "#f7f7f9",
      100: "#dfe0e6",
      200: "#c4c5d0",
      300: "#a3a5b7",
      400: "#9193a8",
      500: "#797b95",
      600: "#646785",
      700: "#4f5274",
      800: "#414569",
      900: "#2c3059",
    },
  },
  styles: {
    global: () => ({
      "html, body": {
        bg: "black",
        color: "gray.100",
        lineHeight: 2,
      },
    }),
  },
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
  components: {
    Link: {
      baseStyle: {
        color: "gray.50",
        fontWeight: "bold",
        _hover: {
          textDecoration: "none",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "primary.500",
      },
    },
  },
});

export default theme;
