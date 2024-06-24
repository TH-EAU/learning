import {
  Box,
  Container,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ReactNode, useState } from "react";
import Footer from "./Footer";
import QuickActionBar from "./QuickActionBar";
import { motion } from "framer-motion";

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
          mt={3}
          h="full"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(15, 1fr)"
          gap={4}
        >
          <GridItem colSpan={3} display={{ base: "none", md: "block" }}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={{ base: 15, md: 9 }} zIndex={zenMode ? 999 : 1}>
            <Container
              overflowY="auto"
              css={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#FFF3",
                  borderRadius: "24px",
                },
              }}
              maxW="full"
              h="75vh"
              p={5}
              pt={0}
              zIndex={999}
              transform={
                zenMode ? { base: "scale(1.1)", md: "scale(1.2)" } : "scale(1)"
              }
              transition="1s"
            >
              <motion.div>{children}</motion.div>
              <Footer />
            </Container>
          </GridItem>
          <GridItem colSpan={2} colStart={14} zIndex={zenMode ? 999 : 1}>
            <QuickActionBar zenMode={zenMode} onZenMode={toogleZenMode} />
          </GridItem>
        </Grid>
        {zenMode && (
          <Box
            onClick={toogleZenMode}
            bg={useColorModeValue("#e9e8fc33", "#00002433")}
            position="fixed"
            top={0}
            left={0}
            w="100vw"
            h="100vh"
            backdropFilter="blur(20px)"
            transition="1s"
            zIndex={zenMode ? 100 : 1}
          ></Box>
        )}
      </Container>
    </>
  );
};

export default MainLayout;
