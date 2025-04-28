import { VStack, ScrollView } from "@gluestack-ui/themed";

import SignInHeader from "./components/SignInHeader";
import SignInForm from "./components/SignInForm";
import SignInFooter from "./components/SignInFooter";
import SignInBackgroundImage from "./components/SignInBackgroundImage";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigate = useNavigation<AuthNavigatorRoutesProps>();
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <SignInBackgroundImage />
        <SignInHeader />
        <VStack flex={1} px="$10" pb="$16">
          <SignInForm />
          <SignInFooter
            text="Criar uma conta"
            onPress={() => navigate.navigate("signUp")}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
