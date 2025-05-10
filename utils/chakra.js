import { extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const theme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  colors: {
    black: "#101010",
    gray: {
      50: "#fafafa",
      100: "#f1f1f1",
      200: "#e7e7e7",
      300: "#d4d4d4",
      400: "#adadad",
      500: "#7f7f7f",
      600: "#545454",
      700: "#373737",
      800: "#202020",
      900: "#191919",
    },
    primary: {
      50: "#fdf5fd",
      100: "#f8d5f8",
      200: "#f2aff2",
      300: "#ea7cea",
      400: "#e55ae5",
      500: "#da13da",
      600: "#bb00bb",
      700: "#980098",
      800: "#820082",
      900: "#600060",
    },
    secondary: {
      50: "#eefaf7",
      100: "#b8eadf",
      200: "#76d7c1",
      300: "#18bb97",
      400: "#00a883",
      500: "#008e6e",
      600: "#00785d",
      700: "#00604b",
      800: "#00523f",
      900: "#003b2e",
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
        bg: "gray.900",
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
