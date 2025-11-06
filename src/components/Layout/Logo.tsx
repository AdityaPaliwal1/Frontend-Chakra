import { Box, Text } from "@chakra-ui/react";


 const Logo = () => {
  return (
    <Box display="flex" alignItems="center" px={6} w="100px">
      <Text fontSize="lg" fontWeight="bold" color="teal.400">
        Chakra UI
      </Text>
    </Box>
  );
 }

  export default Logo;