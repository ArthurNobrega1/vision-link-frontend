import React, { useState } from "react";
import { Container, Logo, Title, InputContainer, Input, Button, ButtonText } from "./styles";
import logoImg from "@assets/logo.png";
import { Alert } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    console.log("Logando com:", email, password);
  };

  return (
    <Container>
      <Logo source={logoImg} accessibilityLabel="Logo Vision Link!" />
      <Title>Bem-vindo(a)</Title>
      
      <InputContainer>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="Campo de Email"
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          accessibilityLabel="Campo de Senha"
        />
      </InputContainer>

      <Button onPress={handleLogin} accessibilityLabel="Botão de Login">
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}
