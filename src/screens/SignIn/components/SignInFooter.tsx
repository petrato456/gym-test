import Button from "@components/Button";
import { Center, Text } from "@gluestack-ui/themed";

type Props = {
  onPress?: () => void;
  text: string;
};

export default function SignInFooter({ onPress, text }: Props) {
  return (
    <Center flex={1} justifyContent="flex-end" mt="$4">
      <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
        {text}
      </Text>
      <Button title={text} variant="outline" onPress={onPress} />
    </Center>
  );
}
