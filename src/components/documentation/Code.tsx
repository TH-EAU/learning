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
      bg="#011627"
      color="white"
      boxShadow="0px -1px 0px 0px #e9e8fc55, -1px 0px 0px 0px #e9e8fc22 ,1px 1px 0px 0px #000024 "
    >
      <HStack justify="space-between" alignContent="end" pl={5} pr={0}>
        <Text as="span" fontSize="small">
          {fileTitle}
        </Text>
        <IconButton
          variant="unstyled"
          aria-label="copy"
          icon={<VscCopy />}
          onClick={onCopy}
          color="white"
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
