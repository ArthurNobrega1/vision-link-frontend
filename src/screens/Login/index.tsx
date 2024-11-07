import React, { useState } from "react";
import { Container, LogoContainer, Logo, Title, InputContainer, Input, ForgotPassword, ButtonContainer, LoginButton, SignUpButton, ButtonText } from "./styles";
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

  const handleForgotPassword = () => {
    Alert.alert("Recuperação de Senha", "Funcionalidade em desenvolvimento.");
  };

  const handleSignUp = () => {
    Alert.alert("Criar Conta", "Funcionalidade em desenvolvimento.");
  };

  return (
    <Container>
      <LogoContainer>
      <Logo source={logoImg} />
      <Title>A inclusão através da tecnologia</Title>
      </LogoContainer>

      <Title>Login</Title>
      
      <InputContainer>
      <Input
          placeholder="Digite seu e-mail..." 
          value={email} 
          onChangeText={setEmail}
      />
      <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
      />
      <ForgotPassword>Esqueci minha senha</ForgotPassword>
  </InputContainer>

      
  <ButtonContainer>
      <LoginButton>
          <ButtonText>Entrar</ButtonText>
      </LoginButton>
      <SignUpButton>
          <ButtonText>Criar conta</ButtonText>
      </SignUpButton>
  </ButtonContainer>
</Container>
  );
}
