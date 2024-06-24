import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Heading,
  Text,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import routes from "../routes/routes";

const Sidebar: React.FC = () => {
  const docsRoute = routes.docs;
  const origin = "docs";
  return (
    <Stack w="full" h="full">
      <Link to="/"></Link>
      <Accordion allowMultiple>
        {docsRoute.map((el) => {
          return (
            <Stack key={el.label} mb={8}>
              <Link to={`${origin}${el.path}`}>
                <Heading
                  fontSize="smaller"
                  fontWeight="800"
                  textTransform="uppercase"
                  pl={5}
                >
                  {el.label}
                </Heading>
              </Link>
              {generateNavigation(el.children, origin)}
            </Stack>
          );
        })}
      </Accordion>
    </Stack>
  );
};

export default Sidebar;

const generateNavigation = (routes: any[], origin: string) => {
  const { colorMode } = useColorMode();

  return routes.map((route) => {
    if (route.path.includes("index")) {
      return null;
    }
    const path = `${origin}/${route.path}`;
    return (
      <AccordionItem key={path} border="none">
        <AccordionButton
          p={1}
          pl={5}
          justifyContent="left"
          rounded="md"
          _hover={{
            bg: colorMode === "light" ? "primary.800" : "primary.100",
          }}
        >
          {route.children && <AccordionIcon />}
          <Link to={path}>
            <HStack>
              {route.icon && <route.icon />}
              <Text
                as="span"
                fontSize="small"
                fontWeight="200"
                textAlign="left"
              >
                {route.label.charAt(0).toUpperCase() + route.label.slice(1)}
              </Text>
            </HStack>
          </Link>
        </AccordionButton>
        {route.children && (
          <AccordionPanel>
            {generateNavigation(route.children, path)}
          </AccordionPanel>
        )}
      </AccordionItem>
    );
  });
};
