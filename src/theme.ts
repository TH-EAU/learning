import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

import "@fontsource/poppins";
import { color } from "framer-motion";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        backgroundColor: mode("primary.900", "primary.50")(props),
        color: mode("primary.100", "primary.900")(props),
      },
      h1: {
        color: "primary.600",

        fontSize: "xx-large",
        fontWeight: "700",
        marginBottom: 2,
      },
      h2: {
        color: "primary.600",
        fontWeight: "600",
        fontSize: "x-large",
      },
      h3: {
        color: "primary.600",
        fontWeight: "100",
        fontSize: "large",
      },
      p: {
        marginBottom: 6,
      },
      a: {
        color: mode("primary.200", "primary.800")(props),
        fontWeight: "700",
      },
    }),
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    text: "Poppins, sans-serif",
  },
  colors: {
    system: {
      100: "#000024",
      200: "#0D0D4E",
      300: "#282879",
      400: "#5252A3",
      500: "#8989CE",
      600: "#CFCFF8",
      700: "#A0B3CD",
      800: "#D4E3F8",
    },
    primary: {
      50: "#030317",
      100: "#090845",
      200: "#0f0d73",
      300: "#1612a1",
      400: "#1c17cf",
      500: "#3530e8",
      600: "#625eed",
      700: "#8f8cf2",
      800: "#bcbaf7",
      900: "#e9e8fc",
    },
    secondary: {
      50: "#170214",
      100: "#46073c",
      200: "#740b63",
      300: "#a3108b",
      400: "#d114b3",
      500: "#eb2ecc",
      600: "#ef5cd7",
      700: "#f48be3",
      800: "#f8b9ee",
      900: "#fde8f9",
    },
  },
});
