import Muka from "../assets/Muka.jpeg";
import "../App.css";

const {
  Box,
  Text,
  Flex,
  Container,
  Image,
  VStack,
} = require("@chakra-ui/react");

const Description = () => {
  return (
    <div id="description">
      <Box backgroundColor="blackAlpha.900">
        <Container
          maxW={{ lg: "container.lg", base: "container.sm" }}
          py={{ lg: "32", base: "14" }}
        >
          <Flex color="white" direction="row" justifyContent="start">
            <VStack textAlign={"center"}>
              <Text
                maxWidth={{ base: "410px", md: "756px" }}
                textTransform="uppercase"
                fontSize={{ sm: "sm", md: "md", lg: "xl", xl: "4xl" }}
                fontWeight="bold"
                lineHeight="1.25"
                mt="20px"
                paddingRight={{ sm: "5px", md: "10px", lg: "15px", xl: "20px" }}
              >
                Sedia berbagai macam baju adat, profesi, tari, dan wisuda dengan
                berbagai ukuran.
              </Text>
              <Text
                maxWidth={{ base: "410px", md: "756px" }}
                textTransform="uppercase"
                fontSize={{ sm: "sm", md: "md", lg: "lg", xl: "xl" }}
                fontWeight="normal"
                lineHeight="1.25"
                mt="20px"
                color="red"
                paddingRight={{ sm: "5px", md: "10px", lg: "15px", xl: "20px" }}
              >
                Hati hati atas pengatas namaan nomor whatsapp lain. Website ini
                resmi dan nomor kami hanya satu satunya di <b>082173448988</b>. SELALU
                CHAT dulu untuk ketersediaan sebelum datang ke toko.
              </Text>
            </VStack>

            <Image
              src={Muka}
              alt="Owner"
              height="200px"
              width="200px"
              borderRadius={"20px"}
            />
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default Description;
