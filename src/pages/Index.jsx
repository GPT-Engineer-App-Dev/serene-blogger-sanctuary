import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              My Personal Blog
            </Heading>
            <Flex>
              <Link href="/" mx={2}>
                Home
              </Link>
              <Link href="/about" mx={2}>
                About
              </Link>
              <Link href="/blog" mx={2}>
                Blog
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8}>
          <Box as="article" w="100%" p={4} borderWidth={1} borderRadius="md">
            <Heading as="h2" size="md" mb={2}>
              Blog Post Title
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box as="article" w="100%" p={4} borderWidth={1} borderRadius="md">
            <Heading as="h2" size="md" mb={2}>
              Another Blog Post
            </Heading>
            <Text>
              Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
            </Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Text textAlign="center">© 2023 My Personal Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;