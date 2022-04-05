import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import * as Yup from "yup";

import { Bullet } from "../../../components/Bullet";
import { BackButton } from "../../../components/BackButton";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from "./styles";
import { Button } from "../../../components/Button";
import { InputPassword } from "../../../components/InputPassword";

interface Params {
  user: {
    name: string;
    email: string;
    driveLicense: string;
  };
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params as Params;
  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }

  function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a senha e a confirmação");
    }

    if (password !== passwordConfirm) {
      return Alert.alert("As senhas não são iguais");
    }

    navigation.navigate("Confirmation", {
      title: "Conta Criada!",
      message: `Agora é só fazer login\ne aproveitar.`,
      nextScreenRoute: "SignIn",
    });
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>

            <InputPassword
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <InputPassword
              iconName="lock"
              placeholder="Repetir Senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>

          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
