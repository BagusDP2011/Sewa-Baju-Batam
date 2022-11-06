import { Box, Container, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import "../../App.css";

const About = () => {
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
                    <iframe
                      title="googlemap"
                      width="600"
                      height="450"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=arrahman%20collection&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                    ></iframe>
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
