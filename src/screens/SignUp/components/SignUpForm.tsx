import Button from "@components/Button";
import Input from "@components/Input";
import { Center, Heading } from "@gluestack-ui/themed";

export default function SignUpForm() {
  return (
    <Center gap="$2">
      <Heading color="$gray100">Acesse a conta</Heading>
      <Input placeholder="Nome" />

      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input placeholder="Senha" secureTextEntry />

      <Input placeholder="Confirme a Senha" secureTextEntry />

      <Button title="Entrar" />
    </Center>
  );
}
