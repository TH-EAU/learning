import {
  Button,
  Stack,
  Tag,
  Center,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { GiFlowerTwirl } from "react-icons/gi";
import { IoHeartSharp } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

const QuickActionBar: React.FC<{
  zenMode: boolean;
  onZenMode: any;
}> = ({ zenMode, onZenMode }) => {
  return (
    <>
      {zenMode ? (
        <IconButton
          onClick={onZenMode}
          aria-label="Close button"
          icon={<VscChromeClose />}
          position="absolute"
          top={1}
          right={0}
          variant="ghost"
          color="system.300"
        />
      ) : (
        <Center
          position={zenMode ? "fixed" : { base: "fixed", md: "static" }}
          bottom={8}
          left={0}
          w="full"
        >
          <Stack
            flexDirection={zenMode ? "row" : { base: "row", md: "column" }}
            border={
              zenMode
                ? "solid 1px grey"
                : { base: "solid 1px grey", md: "none" }
            }
            rounded="md"
            p={3}
            backdropFilter="blur(7px)"
            transition="1s"
          >
            {!zenMode && (
              <Heading
                display={{ base: "none", md: "block" }}
                as="h2"
                textTransform="uppercase"
                fontSize="small"
              >
                Quick actions
              </Heading>
            )}
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
              {!zenMode && "Zen mode"}
            </Button>
            <Button
              size="sm"
              fontWeight="200"
              variant="ghost"
              justifyContent="left"
              leftIcon={<IoHeartSharp />}
            >
              {!zenMode && (
                <>
                  Like page <Tag>10</Tag>
                </>
              )}
            </Button>
          </Stack>
        </Center>
      )}
    </>
  );
};

export default QuickActionBar;
