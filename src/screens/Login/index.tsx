import React, { useCallback, useState } from "react";
import { Container, Header, Logo, Title, ForgotPassword, ButtonContainer, LoginButton, SignUpButton, Main, MainTitle, InputContainer, LoginButtonText, SignUpButtonText } from "./styles";
import logoImg from "@assets/logo.png";
import { Alert } from "react-native";
import InputLogin from "@components/InputLogin";
import axios from "axios";
import { API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [userIdentifier, setUserIdentifier] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation()

  const handleGoToRegister = useCallback(() => {
    navigation.navigate('register')
  }, [navigation])

  const handleGoToHome = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'home' }]
    })
  }, [navigation])

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${API_URL}/sessions/`, {
        email: userIdentifier,
        username: userIdentifier,
        password
      })

      const token = response.data.token
      await AsyncStorage.setItem('@userToken', token)

      Alert.alert('Sucesso', 'Conta logada com sucesso!')
      handleGoToHome()
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Erro desconhecido'
        Alert.alert('Erro', errorMessage)
      } else {
        Alert.alert('Erro', 'Erro desconhecido')
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
          <SignUpButton onPress={handleGoToRegister}>
            <SignUpButtonText>Criar conta</SignUpButtonText>
          </SignUpButton>
        </ButtonContainer>
      </Main>
    </Container >
  );
}