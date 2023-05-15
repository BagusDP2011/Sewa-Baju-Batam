import { Box, Button, Stack, Text, Image, HStack } from "@chakra-ui/react";
import bg from "../assets/toko.jpg";
import "../App.css";

const FirstPage = () => {
  return (
    <div id="mainpage">
      <Box
        height={{ lg: "80vh", md: "55vh" }}
        position="relative"
        display="flex"
        paddingX={{ lg: "64px", md: "16px" }}
      >
        {/* <Box  /> */}
        <HStack alignSelf={"left"} spacing={{ sm: 2, md: 3, lg: 4 }}>
          <Image
            src={bg}
            layout="fill"
            alt="toko"
            objectFit="cover"
            width={{ sm: "25%", md: '30%', lg: "50%" }}
            height="60%"
          />

          <Stack alignSelf="center" spacing={{ sm: 2, md: 3, lg: 4 }}>
            <Text
              position="relative"
              color="black"
              fontSize={{ sm: 'l', lg: "2xl", md: "xl" }}
              lineHeight={{ md: "1" }}
              fontFamily="Inter"
              fontWeight="bold"
            >
              Ar-Rahman Collection
            </Text>
            <Text
              position="relative"
              color="black"
              fontSize={{ lg: "8xl", md: "6xl" }}
              lineHeight={{ md: "1" }}
              fontFamily="Inter"
              fontWeight="bold"
            >
              Sewa Baju Batam
            </Text>
            <Text
              position="relative"
              color="black"
              fontSize={{ lg: "lg", md: "sm" }}
              fontFamily="Inter"
              fontWeight="medium"
            >
              Genta 1 Blok Z no 24, Kecamatan Batu Aji, Batam
            </Text>
            <Button
              onClick={() =>
                window.open("https://goo.gl/maps/WvokCmzr3GYHRkSu9")
              }
              alignSelf="start"
              colorScheme="blackAlpha"
            >
              Visit Us
            </Button>
          </Stack>
        </HStack>
      </Box>
    </div>
  );
};

export default FirstPage;
