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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import routes from "../routes/routes";

const Sidebar: React.FC = () => {
  const docsRoute = routes.docs;
  return (
    <Stack w="full" h="full" p={5}>
      <Heading fontSize="smaller" fontWeight="800" textTransform="uppercase">
        DOCS
      </Heading>
      <Accordion allowMultiple>
        {generateNavigation(docsRoute, "docs")}
      </Accordion>
    </Stack>
  );
};

export default Sidebar;

const generateNavigation = (routes: any[], origin: string) => {
  return routes.map((route) => {
    if (route.path === "index") {
      return null;
    }
    const path = `${origin}/${route.path}`;
    return (
      <AccordionItem key={path} border="none">
        <AccordionButton justifyContent="left" rounded="md">
          {route.children && <AccordionIcon />}
          <Link to={path}>
            <HStack>
              {route.icon && <route.icon />}
              <Text as="span" fontSize="small" textAlign="left">
                {route.label}
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
