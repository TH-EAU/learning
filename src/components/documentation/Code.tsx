import { ReactNode, useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.min.css";
import { Box, HStack, IconButton, Text, useToast } from "@chakra-ui/react";
import { VscCopy } from "react-icons/vsc";

const Code: React.FC<{
  children: ReactNode;
  language: string;
  fileTitle: string;
}> = ({ children, fileTitle, language = "" }) => {
  const toast = useToast();

  const onCopy = () => {
    try {
      navigator.clipboard.writeText(children?.toString() || "");
      toast({
        title: "Copié !",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Une erreur s'est produite",
        status: "error",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Box
      position="relative"
      rounded="md"
      overflow="hidden"
      mt={6}
      border="1px solid"
      borderColor="primary.200"
    >
      <HStack
        justify="space-between"
        alignContent="end"
        pl={2}
        pr={2}
        borderBottom="1px solid"
        borderColor="primary.200"
      >
        <Text as="span" fontSize="small">
          {fileTitle}
        </Text>
        <IconButton
          variant="ghost"
          aria-label="copy"
          icon={<VscCopy />}
          onClick={onCopy}
        />
      </HStack>
      <Text position="absolute" top={0} left={0} fontSize="xx-small" p={2}>
        {language}
      </Text>
      <pre>
        <code> {children}</code>
      </pre>
    </Box>
  );
};

export default Code;
