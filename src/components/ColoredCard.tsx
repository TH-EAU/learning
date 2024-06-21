import { Card, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const ColoredCard: React.FC<{ children: ReactNode; rounded: boolean }> = ({
  children,
  rounded,
}) => {
  return (
    <Card
      rounded={rounded ? "md" : "none"}
      border="1px #888 solid"
      background="linear-gradient(130deg, transparent 0% 33%, #6644e7ee 66%, #c13467ee 83%, sandybrown 100% )"
      backgroundPosition="0% 0%"
      backgroundSize="300% 300%"
      overflow="hidden"
      transition=".35s ease"
      backdropFilter="blur(15px)"
      _hover={{
        backgroundPosition: "100% 100%",
        transform: "scale(1.03, 1.03)",
        color: "white",
        zIndex: 9,
      }}
    >
      <Box
        w="full"
        h="full"
        background="radial-gradient(rgba(255,255,255,.2) 8%, transparent 8%)"
        backgroundPosition="0% 0%"
        backgroundSize="5vmin 5vmin"
        position="absolute"
      />
      {children}
    </Card>
  );
};

export default ColoredCard;
