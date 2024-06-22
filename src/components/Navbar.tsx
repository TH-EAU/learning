import { Link } from "react-router-dom";

import { CiMenuBurger } from "react-icons/ci";
import { GoX } from "react-icons/go";
import { FaMoon, FaSun } from "react-icons/fa";
import { VscGear } from "react-icons/vsc";

import {
  Image,
  HStack,
  Container,
  IconButton,
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.sm">
      <HStack
        h={16}
        p={4}
        gap={8}
        borderBottom="1px grey"
        borderColor="system.600"
        position="fixed"
        left={0}
        top={0}
        width="full"
        backdropFilter="blur(11px)"
        justifyContent="space-between"
        zIndex={99}
      >
        <Link to="/">
          <Image
            src="/learning/esiea.png"
            alt="logo"
            width={28}
            height={16}
          ></Image>
        </Link>

        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size="md"
            icon={isOpen ? <GoX /> : <CiMenuBurger />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Button variant="ghost" onClick={toggleColorMode}>
              {colorMode === "light" ? <FaMoon /> : <FaSun />}
            </Button>
          </HStack>
          <IconButton
            size="md"
            aria-label={"Open Settings"}
            icon={<VscGear />}
          ></IconButton>
        </Flex>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottom="1px grey solid">
              <HStack justifyContent="space-between">
                <Image alt="logo" src="esiea.png" width={20} height={10} />
                <DrawerCloseButton p={6} />
              </HStack>
            </DrawerHeader>
            <DrawerBody>
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Container>
  );
};

export default Navbar;
