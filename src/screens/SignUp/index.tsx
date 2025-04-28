import { ScrollView, VStack } from "@gluestack-ui/themed";
import SignInBackgroundImage from "@screens/SignIn/components/SignInBackgroundImage";
import SignInHeader from "@screens/SignIn/components/SignInHeader";
import SignUpForm from "./components/SignUpForm";
import SignInFooter from "@screens/SignIn/components/SignInFooter";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigate = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <VStack flex={1}>
        <SignInBackgroundImage />
        <VStack flex={1} px="$10" pb="$16">
          <SignInHeader />
          <SignUpForm />
          <SignInFooter
            text="Voltar a tela de login"
            onPress={() => navigate.navigate("signIn")}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
