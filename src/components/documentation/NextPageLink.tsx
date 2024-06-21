import { Button, HStack } from "@chakra-ui/react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const NextPageLink: React.FC<{
  to: string;
  label: string;
  invert?: boolean;
}> = ({ to, label, invert }) => {
  return (
    <Button p={5} mt={5} border="1px solid" variant="link">
      <HStack>
        {invert && <IoMdArrowBack />}
        <Link to={to}>{label}</Link>
        {!invert && <IoMdArrowForward />}
      </HStack>
    </Button>
  );
};

export default NextPageLink;
