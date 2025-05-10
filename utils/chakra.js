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
      50: "#eff9f8",
      100: "#bfe8e4",
      200: "#84d4cc",
      300: "#36b8ab",
      400: "#04a696",
      500: "#038d7f",
      600: "#02776b",
      700: "#025f56",
      800: "#015149",
      900: "#013b35",
    },
    secondary: {
      50: "#f6f7fa",
      100: "#dce0ec",
      200: "#bec5db",
      300: "#9aa5c7",
      400: "#8693bc",
      500: "#6b7cad",
      600: "#5467a1",
      700: "#3c5193",
      800: "#2b438a",
      900: "#112c7c",
    },
    background: {
      50: "#f7f7f8",
      100: "#dfe0e3",
      200: "#c4c5cb",
      300: "#a3a6ae",
      400: "#91949e",
      500: "#787d89",
      600: "#646978",
      700: "#4f5465",
      800: "#414759",
      900: "#2c3346",
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
        color: "primary.300",
      },
    },
  },
});

export default theme;
