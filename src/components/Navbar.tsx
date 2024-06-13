import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <HStack h={16} borderColor="grey.500" borderBottom="1px solid">
      <Link to="/">
        <Image src="esiea.png" alt="logo" width={41} height={21}></Image>
      </Link>
    </HStack>
  );
};

export default Navbar;
