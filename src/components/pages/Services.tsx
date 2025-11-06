import { Box, Text , Heading , HStack } from '@chakra-ui/react';

const Services = () => {    
    return (
        <Box p={8}>
            <Heading mb={6} textAlign="center">Our Services</Heading>
            <HStack  justify="center" gap={20} flexWrap="wrap">
                <Box p={5} shadow="md" borderWidth="1px">
                    <Heading fontSize="xl" textAlign="center">Service One</Heading>
                    <Text mt={4}>Description of service one.</Text>
                </Box>
                <Box p={5} shadow="md" borderWidth="1px">
                    <Heading fontSize="xl"textAlign="center">Service Two</Heading>
                    <Text mt={4}>Description of service two.</Text>
                </Box>

                <Box p={5} shadow="md" borderWidth="1px">
                    <Heading fontSize="xl"textAlign="center">Service Three</Heading>
                    <Text mt={4}>Description of service three.</Text>
                </Box>
            </HStack>
        </Box>
    );
};
export default Services;