import { HStack, IconButton, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <Container maxW="container.xl" mt={24}>
      <HStack justify="space-between" align="center" pr={5} pl={5}>
        <Link to="/">
          <Logo />
        </Link>

        <Text as="span" fontSize="x-small">
          © 2024 Théau NICOLAS. All rights reserved
        </Text>
        <IconButton
          as="a"
          href="https://github.com/TH-EAU"
          aria-label="github"
          icon={<VscGithub />}
          rounded="full"
        />
      </HStack>
    </Container>
  );
};

export default Footer;
