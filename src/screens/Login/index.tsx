import React, { useState } from "react";
import { Container, Header, Logo, Title, ForgotPassword, ButtonContainer, LoginButton, SignUpButton, Main, MainTitle, InputContainer, LoginButtonText, SignUpButtonText } from "./styles";
import logoImg from "@assets/logo.png";
import { Alert } from "react-native";
import InputLogin from "@components/InputLogin";
import axios from "axios";
import { API_URL } from "@env";

export default function Login() {
  const [userIdentifier, setUserIdentifier] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    try {
      await axios.post(`${API_URL}/sessions/`, {
        email: userIdentifier,
        username: userIdentifier,
        password
      })
      Alert.alert('Sucesso', 'Conta logada com sucesso!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Erro desconhecido'
        Alert.alert('Erro', errorMessage)
        console.log('Erro:', errorMessage)
      } else {
        Alert.alert('Erro', 'Erro desconhecido')
        console.log('Erro: Desconhecido')
      }
    }
  }

  return (
    <Container>
      <Header>
        <Title>A inclusão através da tecnologia</Title>
        <Logo source={logoImg} />
      </Header>

      <Main>
        <MainTitle>Login</MainTitle>
        <InputContainer>
          <InputLogin
            description="E-mail ou nome do usuário"
            placeholder="Digite seu e-mail"
            value={userIdentifier}
            onChangeText={setUserIdentifier}
            keyboardType="email-address"
          />
          <InputLogin
            description="Senha"
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </InputContainer>
        <ForgotPassword>Esqueci minha senha</ForgotPassword>
        <ButtonContainer>
          <LoginButton onPress={handleSubmit}>
            <LoginButtonText>Entrar</LoginButtonText>
          </LoginButton>
          <SignUpButton>
            <SignUpButtonText>Criar conta</SignUpButtonText>
          </SignUpButton>
        </ButtonContainer>
      </Main>
    </Container >
  );
}