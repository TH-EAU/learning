import { Link } from "react-router-dom";

import { CiMenuBurger } from "react-icons/ci";
import { GoX } from "react-icons/go";
import { FaMoon, FaSun } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";

import {
  HStack,
  Container,
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack
        gap={8}
        borderBottom="1px grey"
        borderColor="system.600"
        position="sticky"
        left={0}
        top={0}
        backdropFilter="blur(11px)"
        justifyContent="space-between"
        zIndex={99}
      >
        <Container maxW="container.xl" p={3} pl={8} pr={8}>
          <HStack align="center" justify="space-between">
            <Link to="/">
              <HStack align="center">
                <Logo />
                <Text as="span">LEARNING</Text>
              </HStack>
            </Link>

            <HStack align="center" justify="space-between">
              <IconButton
                size="md"
                icon={isOpen ? <GoX /> : <CiMenuBurger />}
                aria-label={"Open Menu"}
                display={{ lg: "none" }}
                onClick={isOpen ? onClose : onOpen}
                variant="ghost"
              />
              <Button variant="ghost" onClick={toggleColorMode}>
                {colorMode === "light" ? <FaMoon /> : <FaSun />}
              </Button>
              <IconButton
                size="md"
                aria-label={"Open Settings"}
                icon={<VscSettings />}
                variant="ghost"
              ></IconButton>
            </HStack>
          </HStack>
        </Container>
      </HStack>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottom="1px grey solid">
            <HStack justifyContent="space-between">
              <Logo />
              <DrawerCloseButton p={6} />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
