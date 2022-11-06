import Muka from "../assets/Muka.jpeg";
import "../App.css";

const { Box, Text, Flex, Container, Image } = require("@chakra-ui/react");

const Description = () => {
  return (
    <div id="description">
      <Box backgroundColor="blackAlpha.900">
        <Container
          maxW={{ lg: "container.lg", base: "container.sm" }}
          py={{ lg: "32", base: "14" }}
        >
          <Flex color="white" direction="row" justifyContent="start">
            <Text
              maxWidth={{ base: "410px", md: "756px" }}
              textTransform="uppercase"
              fontSize={{ lg: "4xl", base: "2xl" }}
              fontWeight="bold"
              lineHeight="1.25"
              mt="20px"
            >
              Sedia berbagai macam baju adat, profesi, tari, dan wisuda dengan
              berbagai ukuran.
            </Text>
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
