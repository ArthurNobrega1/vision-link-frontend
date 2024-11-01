import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 40px;
  text-transform: uppercase;
`;

export const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  height: 50px;
  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_200};
  border-radius: 8px;
  padding: 0 15px;
  color: ${({ theme }) => theme.COLORS.SECONDARY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 80%;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-transform: uppercase;
`;
