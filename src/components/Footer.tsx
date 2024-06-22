import { HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";

const Footer: React.FC = () => {
  return (
    <HStack justify="space-between" align="center" pr={5} pl={5}>
      <Link to="/">
        <Image
          src="/learning/esiea.png"
          alt="logo"
          width={28}
          height={16}
        ></Image>
      </Link>

      <Text as="span">© 2024 Théau NICOLAS. All rights reserved</Text>
      <IconButton
        as="a"
        href="https://github.com/TH-EAU"
        aria-label="github"
        icon={<VscGithub />}
        rounded="full"
      />
    </HStack>
  );
};

export default Footer;
