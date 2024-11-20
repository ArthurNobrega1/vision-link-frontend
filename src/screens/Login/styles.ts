import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_300};
  justify-content: center;
`;

export const Header = styled.View`
  position: absolute;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 250px;
  border-bottom-right-radius: 200px;
  border-bottom-left-radius: 200px;
  top: 0;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  accessibilityLabel: "Logo Vision Link!"
})`
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.ITALIC};
  margin-bottom: 20px;
`;

export const InputContainer = styled.View`
  width: 75%;
  gap: 6px;
  margin-bottom: 20px;
  border-radius: 20px;
  align-items: center;
`;

export const ForgotPassword = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE["2XS"]}px;
  width: 75%;
  color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 85%;
  margin-top: 20px;
`;

export const LoginButton = styled(TouchableOpacity)`
  flex: 1;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_300};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const SignUpButton = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_300};
`;

export const SignUpButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`;

export const LoginButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`;

export const Main = styled.View`
    justify-content: center;
    margin-top: 140px;
    width: 300px;
    height: 300px;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    border-radius: 20px;
`

export const MainTitle = styled.Text`
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: bold;
`;