import { Container, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
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
          <GridItem colSpan={{ base: 15, md: 8 }}>
            <Container maxW="full" p={5}>
              {children}
            </Container>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default MainLayout;
