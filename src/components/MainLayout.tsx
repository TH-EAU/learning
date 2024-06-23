import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ReactNode, useState } from "react";
import Footer from "./Footer";
import QuickActionBar from "./QuickActionBar";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [zenMode, setZenMode] = useState(false);
  const toogleZenMode = () => {
    setZenMode(!zenMode);
  };
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <Grid
          mt={16}
          h="full"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(15, 1fr)"
          gap={4}
        >
          <GridItem colSpan={4} display={{ base: "none", md: "block" }}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={{ base: 15, md: 8 }} zIndex={999}>
            <Container
              maxW="full"
              p={5}
              zIndex={999}
              transform={zenMode ? "scale(1.2)" : "scale(1)"}
              transition="1s"
            >
              {children}
            </Container>
          </GridItem>
          <GridItem colSpan={2} colStart={14} zIndex={999}>
            <QuickActionBar zenMode={zenMode} onZenMode={toogleZenMode} />
          </GridItem>
        </Grid>
      </Container>
      <Footer />
      {zenMode && (
        <Box
          onClick={toogleZenMode}
          bg="#2133"
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="100vh"
          backdropFilter="blur(20px)"
          transition="1s"
          zIndex={100}
        ></Box>
      )}
    </>
  );
};

export default MainLayout;
