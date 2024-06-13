import { Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SimpleGrid columns={1}>
      <Navbar />
      <Grid
        h="full"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={4}>
          <Container>{children}</Container>
        </GridItem>
      </Grid>
    </SimpleGrid>
  );
};

export default MainLayout;
