import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

import "@fontsource/poppins";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        backgroundColor: mode("primary.800", "primary.100")(props),
        color: mode("primary.100", "primary.800")(props),
      },
      h1: {
        fontSize: "xx-large",
        fontWeight: "600",
        marginBottom: 2,
      },
      h2: {
        color: "primary;600",
        fontSize: "x-large",
      },
      h3: {
        color: "primary.600",
        fontSize: "large",
      },
      p: {
        marginBottom: 6,
      },
    }),
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    text: "Poppins, sans-serif",
  },
  colors: {
    primary: {
      100: "#0B0C20",
      200: "#D4FCEB",
      400: "#2553E9",
      500: "#2A00FF",
      600: "#0057FF",
      800: "#e2e9f6",
    },
    blacko: {
      50: "#000",
      100: "#FFF",
      200: "#FFF",
      300: "#000",
      400: "#FFF",
      500: "#000",
      600: "#000",
      700: "#000",
      800: "#000",
      900: "#000",
    },
  },
});
