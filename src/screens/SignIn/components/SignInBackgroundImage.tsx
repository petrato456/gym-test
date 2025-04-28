import { Image } from "@gluestack-ui/themed";
import BackgroundImg from "@assets/background.png";

export default function SignInBackgroundImage() {
  return (
    <Image
      w="$full"
      h={624}
      source={BackgroundImg}
      defaultSource={BackgroundImg}
      alt="background"
      position="absolute"
    />
  );
}
