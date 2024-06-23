import { Button, Stack, Tag, Center } from "@chakra-ui/react";
import { GiFlowerTwirl } from "react-icons/gi";
import { IoHeartSharp } from "react-icons/io5";

const QuickActionBar: React.FC<{
  zenMode: boolean;
  onZenMode: any;
}> = ({ zenMode, onZenMode }) => {
  return (
    <Center
      position={zenMode ? "fixed" : "static"}
      bottom={5}
      left={0}
      w="full"
    >
      <Stack
        flexDirection={zenMode ? "row" : "column"}
        border={zenMode ? "solid 1px grey" : "none"}
        rounded="md"
        p={3}
      >
        <Button
          size="sm"
          fontWeight="200"
          variant="ghost"
          leftIcon={<GiFlowerTwirl />}
          justifyContent="left"
          _hover={{
            color: "secondary.800",
          }}
          onClick={onZenMode}
        >
          Zen mode
        </Button>
        <Button
          size="sm"
          fontWeight="200"
          variant="ghost"
          justifyContent="left"
          leftIcon={<IoHeartSharp />}
        >
          Like page <Tag>10</Tag>
        </Button>
      </Stack>
    </Center>
  );
};

export default QuickActionBar;
