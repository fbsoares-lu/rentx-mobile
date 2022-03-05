import React from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import theme from "../../styles/theme";

import { Container, Header, Title, SubTitle, Form, Footer } from "./styles";

function SignIn() {
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>Estamos{"\n"}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar{"\n"}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
            />
            <InputPassword
              iconName="lock"
              placeholder="Senha"
              autoCapitalize="none"
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={() => {}}
              loading={false}
              enabled={false}
            />
            <Button
              title="Criar conta gratuita"
              onPress={() => {}}
              light
              loading={false}
              enabled={false}
              color={theme.colors.background_secondary}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { SignIn };
