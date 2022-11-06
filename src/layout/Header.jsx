import { Flex, Text, HStack } from "@chakra-ui/react";
import "../App.css";

const Header = () => {
  return (
    <Flex
      padding={{
        base: "24px 16px",
        lg: "24px 64px",
      }}
      // position="fixed" Bugged
      backgroundColor="blackAlpha.900"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text
        color="white"
        textTransform="uppercase"
        fontFamily="Inter"
        fontWeight="bold"
      >
        Ar-Rahman Collection
      </Text>
      <HStack
        display={{ base: "none", lg: "initial" }}
        color="white"
        spacing={10}
      >
        <a href="#mainpage">Home</a>
        <a href="#collection">Collection</a>
        <a href="#about">About</a>
        <a href="https://api.whatsapp.com/send?phone=6281278732817&text=Saya tertarik dan ingin bertanya">Order</a>
      </HStack>
    </Flex>
  );
};

export default Header;
