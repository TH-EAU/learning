import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import routes from "../routes";

const Sidebar: React.FC = () => {
  const accordionData = routes.docs.childrens;
  return (
    <Stack
      w="full"
      h="full"
      borderColor="grey.500"
      borderBottom="1px solid"
      p={5}
    >
      <Heading fontSize="sm" textTransform="uppercase">
        Cours
      </Heading>
      <Accordion allowToggle>
        {accordionData.map((section, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <section.icon />
                {section.label}
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {section.childrens?.map((child) => (
                <NavItem
                  to={`docs/${section.path}/${child.path}`}
                  label={child.label}
                  Icon={child.icon}
                />
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Stack>
  );
};

export default Sidebar;

const NavItem: React.FC<{ Icon: React.FC; to: string; label: string }> = ({
  Icon,
  to,
  label,
}) => {
  return (
    <Link to={to}>
      <HStack>
        <Icon />
        <Button variant="link">{label}</Button>
      </HStack>
    </Link>
  );
};
