import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import { Container, IconContainer, InputText } from "./styles";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

function InputPassword({ iconName, ...rest }: InputProps) {
  const theme = useTheme();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  function handleChangeVisiblePassword() {
    setIsVisiblePassword((prevState) => !prevState);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText {...rest} secureTextEntry={isVisiblePassword} />

      <BorderlessButton onPress={handleChangeVisiblePassword}>
        <IconContainer>
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
