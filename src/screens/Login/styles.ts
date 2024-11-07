import styled from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  width: 85%;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
  border-radius: 20px;
  align-items: center;
`;

export const Input = styled(TextInput)`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 25px;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`;  

export const ForgotPassword = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin-top: 20px;
`;

export const LoginButton = styled(TouchableOpacity)`
  flex: 1;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;


export const SignUpButton = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY_100};
`;
