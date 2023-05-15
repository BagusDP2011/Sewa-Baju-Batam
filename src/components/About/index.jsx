import { Box, Container, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import "../../App.css";

const About = () => {
  const borderStyleGmap = {
    width: "100%",
    maxWidth: "600px",
  };
  const borderStyleDivGmap = {
    position: "relative",
    paddingBottom: "75%",
    height: "0",
  };
  const styleGmap = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  };
  return (
    <div id="about">
      <Box backgroundColor="gray.400">
        <Container
          maxW={{ lg: "container.lg", base: "container.sm" }}
          py={{ lg: "32", base: "14" }}
        >
          <Grid
            gridTemplateColumns={{
              lg: "repeat(2, 1fr)",
              base: "repeat(2, 1fr)",
            }}
          >
            <GridItem>
              <Stack spacing="6">
                <Stack spacing={2} fontFamily="Inter">
                  <Text fontSize="3xl" fontWeight="bold">
                    Contact Details:
                  </Text>
                  <a href="http://wa.me/+6282173448988">
                    <Text fontSize="md" textDecoration={"underline"}>
                      Bu Siti : 0821-7344-8988
                    </Text>
                  </a>
                  <Text fontSize="md">
                    Genta 1 Blok Z no 24, Buliang, Batu Aji, Kota Batam,
                    Kepulauan Riau 29424 Indonesia
                  </Text>
                </Stack>
                <Stack>
                  <Text fontSize="3xl" fontWeight="bold">
                    Jam Buka:
                  </Text>
                  <Text fontSize="md" pl={"20px"}>
                    Senin : 16.00–22.00
                  </Text>
                  <Text fontSize="md" pl={"20px"}>
                    Selasa : 16.00–22.00
                  </Text>
                  <Text fontSize="md" pl={"20px"}>
                    Rabu : 16.00–22.00
                  </Text>
                  <Text fontSize="md" pl={"20px"}>
                    Kamis : 16.00–22.00
                  </Text>
                  <Text fontSize="md" pl={"20px"}>
                    Jumat : 16.00–22.00
                  </Text>
                  <Text fontSize="md" pl={"20px"}>
                    Sabtu : 08.00–22.00
                  </Text>
                  <Text fontSize="md" pl={"20px"}>
                    Minggu : 08.00–22.00
                  </Text>
                </Stack>
              </Stack>
            </GridItem>
            <GridItem>
              <Box paddingLeft={"50px"}>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <div style={borderStyleGmap}>
                      <div style={borderStyleDivGmap}>
                        <iframe
                          title="googlemap"
                          // src="https://maps.google.com/maps?q=arrahman%20collection&t=k&z=15&ie=UTF8&iwloc=&output=embed" // Old
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14855.43086618431!2d103.978212!3d1.048197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98dbc2aaa8b3d%3A0xef0e8ff8bb406a9c!2sAr%20Rahman%20Collection%20Sewa%20Baju!5e1!3m2!1sen!2sus!4v1684129644414!5m2!1sen!2sus"
                          style={styleGmap}
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                        ></iframe>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default About;
