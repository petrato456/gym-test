import { Center, Text } from "@gluestack-ui/themed";
import React from "react";
import Logo from "@assets/logo.svg";

export default function SignInHeader() {
  return (
    <Center my="$24">
      <Logo />
      <Text color="$gray100" fontSize="$sm">
        Treine sua mente e o seu corpo
      </Text>
    </Center>
  );
}
