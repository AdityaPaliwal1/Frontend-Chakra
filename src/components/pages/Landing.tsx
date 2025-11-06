import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Button,
  Image,
  VStack,
  HStack,
  Input,
  Textarea,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Award, Recycle, Truck, Settings, Phone, Mail, MapPin } from "lucide-react";
import { toaster } from "../ui/toaster";
import { useState } from "react";
import PaperReelImage from "../../assets/paperreel.png";
import FactoryManufacturingImage from "../../assets/factorymanufactoring.png";
import FactoryQCImage from "../../assets/factoryqc.png";
import FactoryTeamCollabImage from "../../assets/factoryteamcollab.png";
import FactoryEcoFriendlyImage from "../../assets/factoryecofriendly.png";

const Landing = () => {
  const [enquiryForm, setEnquiryForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
    const images = [
    FactoryManufacturingImage,
    FactoryQCImage,
    FactoryTeamCollabImage,
    FactoryEcoFriendlyImage,
  ];
  const handleEnquirySubmit = () => {
    setEnquirySubmitting(true);
    setTimeout(() => {
      setEnquirySubmitting(false);
      toaster.create({
        title: "Inquiry sent!",
        description: "We'll get back to you soon.",
        type: "success",
        duration: 3000,
        closable: true,
      });
      setEnquiryForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <Box minH="100vh" bg="white">
      {/* Hero Section */}
      <Box position="relative"
      bg="green.50"
      py={20}> 
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
            <Box>
              <Heading as="h1" size="6xl"  color="gray.900" fontWeight="bold" mb={6}>
                Sustainable Paper Reel{" "}
                <Text as="span" color="green.600">
                  Manufacturing
                </Text>
              </Heading>
              <Text fontSize="xl" color="gray.600" mb={8} lineHeight="taller">
                High-quality paper reels for every need. Eco-friendly. Reliable.
                Trusted. Leading the industry with sustainable manufacturing
                practices.
              </Text>
              <Flex direction={{ base: "column", sm: "row" }} gap={4}>
                <Link to="/stock">
                  <Button size="lg" colorScheme="green">
                    Check Available Stock
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  colorScheme="green"
                >
                  Learn More
                </Button>
              </Flex>
            </Box>

            <Box position="relative">
              <Image
                src={PaperReelImage}
                alt="Paper reels manufacturing facility"
                rounded="lg"
                shadow="2xl"
              />
              <Box
                position="absolute"
                bottom="-6"
                left="-6"
                bg="white"
                p={4}
                rounded="lg"
                shadow="lg"
              >
                <HStack>
                  <Box w={3} h={3} bg="green.500" rounded="full" />
                  <Text fontSize="sm" fontWeight="medium">
                    100% Eco-Friendly
                  </Text>
                </HStack>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} bg="white" id="about">
        <Container maxW="7xl">
          <Box textAlign="center" mb={16}>
            <Heading   fontSize={{ base: "3xl", md: "4xl" }}
  fontWeight="bold"
  color="gray.900"
  mb={4}>About Parashwanath Enterprises</Heading>
            <Text   fontSize="xl"
  color="gray.600"
  maxW="3xl"
  mx="auto">
              Leading the industry in sustainable paper reel manufacturing with
              over 25 years of experience
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
            <Box>
              <Heading   fontSize="2xl"
  fontWeight="bold"
  color="gray.900"
  mb={6}>
                Our Mission & Values
              </Heading>
              <Text   color="gray.600"
  fontSize="lg"
  lineHeight="relaxed"
  mb={6}>
                Parashwanath Enterprises is a leading manufacturer of sustainable
                paper reels, committed to providing high-quality products while
                minimizing environmental impact. Our mission is to deliver
                reliable, eco-friendly paper solutions worldwide.
              </Text>
              <Text color="gray.600"  fontSize="lg"lineHeight="relaxed" mb={8}>
                We value sustainability, innovation, and customer satisfaction,
                ensuring our manufacturing adheres to the highest environmental
                standards.
              </Text>
              <SimpleGrid columns={2} gap={6}>
                <VStack>
                  <Heading fontSize="3xl" fontWeight="bold" color="green.600" mb={2}>25+</Heading>
                  <Text color="gray.600">Years Experience</Text>
                </VStack>
                <VStack>
                  <Heading fontSize="3xl" fontWeight="bold" color="green.600" mb={2}>500+</Heading>
                  <Text color="gray.600">Happy Clients</Text>
                </VStack>
              </SimpleGrid>
            </Box>
            <SimpleGrid columns={2} gap={4}>
      {images.map((img, i) => (
        <Image key={i} src={img} rounded="lg" shadow="lg" />
      ))}
    </SimpleGrid>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg="green.50">
        <Container maxW="7xl">
          <Box textAlign="center" mb={16}>
            <Heading  fontSize={{ base: "3xl", md: "4xl" }}fontWeight="bold"color="gray.900" mb={4}>Why Choose Parashwanath Enterprises?</Heading>
            <Text fontSize="xl" color="gray.600">
              We deliver excellence through our core values and practices
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
            {[
              { icon: <Award />, title: "Premium Quality", desc: "ISO certified manufacturing processes ensuring consistent, high-quality paper reels that meet international standards" },
              { icon: <Recycle />, title: "100% Sustainable", desc: "Eco-friendly materials and processes with zero waste manufacturing, contributing to a greener future." },
              { icon: <Truck />, title: "Fast Delivery", desc: "Efficient logistics network ensuring timely delivery across the globe with real-time tracking." },
              { icon: <Settings />, title: "Custom Solutions", desc: "Tailored paper reel specifications to meet your unique requirements with flexible manufacturing options." },
            ].map(({ icon, title, desc }) => (
              <Card.Root key={title} shadow="lg" _hover={{ shadow: "xl" }} textAlign="center">
                <CardBody p={8}>
                  <Flex
                    w={16}
                    h={16}
                    bg="green.100"
                    rounded="full"
                    align="center"
                    justify="center"
                    mx="auto"
                    mb={6}
                  >
                    <Box color="green.600" w={8} h={8}>
                      {icon}
                    </Box>
                  </Flex>
                  <Heading size="xl"  fontWeight="bold" mb={4} color="gray.900">
                    {title}
                  </Heading>
                  <Text color="gray.600">{desc}</Text>
                </CardBody>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={20} bg="gray.50" id="contact">
        <Container maxW="7xl">
          <Box textAlign="center" mb={16}>
            <Heading   fontSize={{ base: "3xl", md: "4xl" }}fontWeight="bold"color="gray.900" mb={4}>Get In Touch</Heading>
            <Text fontSize="xl" color="gray.600">
              Ready to discuss your paper reel requirements? Contact our expert team today.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12}>
            {/* Contact Info */}
            <VStack align="start" gap={6}>
              {[
                {
                  icon: <Phone />,
                  title: "Phone",
                  lines: ["+1 (555) 123-4567", "Mon-Fri 8AM-6PM EST"],
                },
                {
                  icon: <Mail />,
                  title: "Email",
                  lines: ["info@parashwanath.com", "sales@parashwanath.com"],
                },
                {
                  icon: <MapPin />,
                  title: "Address",
                  lines: ["123 Industrial Avenue", "Manufacturing District, State 12345"],
                },
              ].map(({ icon, title, lines }) => (
                <HStack key={title} align="start">
                  <Flex
                    w={12}
                    h={12}
                    bg="green.100"
                    rounded="lg"
                    align="center"
                    justify="center"
                    mr={4}
                  >
                    <Box color="green.600" w={6} h={6}>
                      {icon}
                    </Box>
                  </Flex>
                  <Box>
                    <Heading size="sm" mb={1}>
                      {title}
                    </Heading>
                    {lines.map((line) => (
                      <Text key={line} color="gray.600">
                        {line}
                      </Text>
                    ))}
                  </Box>
                </HStack>
              ))}
            </VStack>

            {/* Inquiry Form */}
            <Card.Root shadow="lg">
              <CardBody p={8}>
                <Heading size="md" mb={6}>
                  Quick Inquiry
                </Heading>
                <form onSubmit={handleEnquirySubmit}>
                  <SimpleGrid columns={2} gap={4} mb={4}>
                    <Input
                      placeholder="First Name"
                      value={enquiryForm.firstName}
                      onChange={(e) =>
                        setEnquiryForm({ ...enquiryForm, firstName: e.target.value })
                      }
                      required
                    />
                    <Input
                      placeholder="Last Name"
                      value={enquiryForm.lastName}
                      onChange={(e) =>
                        setEnquiryForm({ ...enquiryForm, lastName: e.target.value })
                      }
                      required/>
                  </SimpleGrid>
                  <VStack gap={4}>
                    <Input
                      placeholder="Email Address"
                      type="email"
                      value={enquiryForm.email}
                      onChange={(e) =>
                        setEnquiryForm({ ...enquiryForm, email: e.target.value })
                      }
                      required
                    />
                    <Input
                      placeholder="Phone Number"
                      value={enquiryForm.phone}
                      onChange={(e) =>
                        setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                      }
                      required
                    />
                    <Input
                      placeholder="Company Name"
                      value={enquiryForm.company}
                      onChange={(e) =>
                        setEnquiryForm({ ...enquiryForm, company: e.target.value })
                      }
                      required
                    />
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      value={enquiryForm.message}
                      onChange={(e) =>
                        setEnquiryForm({ ...enquiryForm, message: e.target.value })
                      }
                      required
                    />
                    <Button
                      type="submit"
                      colorScheme="green"
                      w="full"
                      loading={enquirySubmitting}
                    >
                      Send Inquiry
                    </Button>
                  </VStack>
                </form>
              </CardBody>
            </Card.Root>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default Landing;