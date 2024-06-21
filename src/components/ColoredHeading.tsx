import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ColoredHeading {
  children: ReactNode;
}

const ColoredHeading: React.FC<ColoredHeading> = ({ children }) => {
  return (
    <Heading
      as="span"
      position="relative"
      fontFamily="var(--font-poppins-extralight)"
      zIndex={1}
      _before={{
        position: "absolute",
        top: 2,
        left: 0,
        width: "full",
        height: "71%",
        zIndex: -1,
        content: '""',
        display: "inline-block",
        bgGradient: "linear(to-r, blue.200, pink.500)",
        filter: "blur(21px)",
      }}
    >
      {children}
    </Heading>
  );
};

export default ColoredHeading;
