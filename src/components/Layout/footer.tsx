import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom"; // Use react-router-dom for Chakra
import { Box, Grid, Text, Flex, Heading, VStack, HStack } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box as="footer" bg="gray.900" color="white" py={12}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
          {/* Logo & Description */}
          <Box>
            <Flex align="center" mb={4}>
              <Flex
                w={8}
                h={8}
                bg="green.600"
                rounded="lg"
                align="center"
                justify="center"
                mr={3}
              >
                <Leaf size={20} color="white" />
              </Flex>
              <Text fontSize="xl" fontWeight="bold">
                Parashwanath Enterprises
              </Text>
            </Flex>
            <Text color="gray.400">
              Leading manufacturer of sustainable paper reels, committed to
              quality and environmental responsibility.
            </Text>
          </Box>

          {/* Quick Links */}
          <Box>
            <Heading as="h3" fontSize="md" fontWeight="semibold" mb={4}>
              Quick Links
            </Heading>
            <VStack align="start" gap={2}>
              <Link to="/#about">
                <Text color="gray.400" _hover={{ color: "green.400" }}>
                  About Us
                </Text>
              </Link>
              <Link to="/#products">
                <Text color="gray.400" _hover={{ color: "green.400" }}>
                  Products
                </Text>
              </Link>
              <Link to="/stock">
                <Text color="gray.400" _hover={{ color: "green.400" }}>
                  Stock
                </Text>
              </Link>
              <Link to="/#contact">
                <Text color="gray.400" _hover={{ color: "green.400" }}>
                  Contact
                </Text>
              </Link>
            </VStack>
          </Box>

          {/* Products */}
          <Box>
            <Heading as="h3" fontSize="md" fontWeight="semibold" mb={4}>
              Products
            </Heading>
            <VStack align="start" gap={2}>
              <Text color="gray.400">Standard Paper Reels</Text>
              <Text color="gray.400">Custom Paper Reels</Text>
              <Text color="gray.400">Eco-Friendly Options</Text>
              <Text color="gray.400">Industrial Grade</Text>
            </VStack>
          </Box>

          {/* Contact Info */}
          <Box>
            <Heading as="h3" fontSize="md" fontWeight="semibold" mb={4}>
              Contact Info
            </Heading>
            <VStack align="start" gap={3}>
              <HStack>
                <Phone size={16} color="#68D391" />
                <Text color="gray.400">+1 (555) 123-4567</Text>
              </HStack>
              <HStack>
                <Mail size={16} color="#68D391" />
                <Text color="gray.400">info@Parashwanath Enterprises.com</Text>
              </HStack>
              <HStack>
                <MapPin size={16} color="#68D391" />
                <Text color="gray.400">123 Industrial Ave, City, State</Text>
              </HStack>
            </VStack>
          </Box>
        </Grid>

        {/* Footer Bottom */}
        <Box borderColor="gray.800" mt={8}></Box>
        <Text textAlign="center" color="gray.400" mt={8}>
          © {new Date().getFullYear()} Parashwanath Enterprises. Made by{" "}
   <ChakraLink
  href="https://synquic.in"
  target="_blank"
  rel="noopener noreferrer"
  color="green.500"
  _hover={{ textDecoration: "underline" }}
>
  Synquic
</ChakraLink>
          .
        </Text>
      </Box>
    </Box>
  );
}
export default Footer;