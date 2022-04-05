import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Container, IconContainer, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

function InputPassword({ iconName, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(true);

  const theme = useTheme();

  function handleInputFocused() {
    setIsFocused(true);
  }

  function handleInputFilled() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handleChangeVisiblePassword() {
    setIsVisiblePassword((prevState) => !prevState);
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>

      <InputText
        isFocused={isFocused}
        secureTextEntry={isVisiblePassword}
        onFocus={handleInputFocused}
        onBlur={handleInputFilled}
        {...rest}
      />

      <BorderlessButton onPress={handleChangeVisiblePassword}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isVisiblePassword ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  );
}

export { InputPassword };
