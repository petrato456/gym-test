import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";
import { Component, ComponentProps } from "react";

type Props = ComponentProps<typeof InputField>;

export default function Input({ ...rest }: Props) {
  return (
    <GluestackInput
      bg="$gray700"
      h="$14"
      px="$4"
      borderBlockColor="$0"
      borderRadius="$md"
      $focus={{
        borderWidth: 1,
        borderColor: "$green500",
      }}
    >
      <InputField
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        {...rest}
      />
    </GluestackInput>
  );
}
