import { Box, Button, Stack, Text, Image, HStack } from "@chakra-ui/react";
import bg from "../assets/toko.jpg";
import "../App.css";

const FirstPage = () => {
  return (
    <div id="mainpage">
      <Box
        height={{ lg: "80vh", base: "55vh" }}
        position="relative"
        display="flex"
        paddingX={{ lg: "64px", base: "16px" }}
      >
        {/* <Box  /> */}
        <HStack alignSelf={"left"} spacing={{ base: 3, lg: 4 }}>
          <Image
            src={bg}
            layout="fill"
            alt="coffee"
            objectFit="cover"
            width="50%"
            height="60%"
          />

          {/* <Box
        position="absolute"
        width="100%"
        height="100%"
        backgroundColor="black"
        opacity={0.3}
        top={0}
        right={0}
        bottom={0}
        left={0}
      /> */}
          <Stack alignSelf="center" spacing={{ base: 3, lg: 4 }}>
            <Text
              position="relative"
              color="black"
              fontSize={{ lg: "2xl", base: "xl" }}
              lineHeight={{ base: "1" }}
              fontFamily="Inter"
              fontWeight="bold"
            >
              Ar-Rahman Collection
            </Text>
            <Text
              position="relative"
              color="black"
              fontSize={{ lg: "8xl", base: "6xl" }}
              lineHeight={{ base: "1" }}
              fontFamily="Inter"
              fontWeight="bold"
            >
              Sewa Baju Batam
            </Text>
            <Text
              position="relative"
              color="black"
              fontSize={{ lg: "lg", base: "sm" }}
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
