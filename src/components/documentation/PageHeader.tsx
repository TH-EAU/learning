import { Box, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Header {
  imageUrl: string;
  imageAlt: string;
  title?: string;
  icon?: ReactNode;
}

const PageHeader: React.FC<Header> = ({ imageUrl, imageAlt, title, icon }) => {
  return (
    <Box position="relative" width="full" height={24} mb={3}>
      <Image
        rounded="xl"
        src={imageUrl}
        alt={imageAlt}
        aria-label={imageAlt}
        height={20}
        boxSize={20}
        width="full"
        objectFit="cover"
      />
      <Heading position="absolute" left={6} top="1.2rem">
        <HStack>
          {icon}
          <Text as="span">{title}</Text>
        </HStack>
      </Heading>
    </Box>
  );
};

export default PageHeader;
