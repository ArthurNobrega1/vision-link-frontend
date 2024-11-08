import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const Header = styled.View`
    position: relative;
    justify-content: center;
    align-items: center;
    height: 140px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`

export const Buttons = styled.View`
    position: absolute;
    width: 90%;
    top: 20px;
    flex-direction: row;
    justify-content: space-between;
`

export const Arrow = styled.TouchableOpacity.attrs({
    accessibilityLabel: "Voltar!"
})``

export const ArrowText = styled.Text`
    text-align: center;
    font-size: 50px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const Congruent = styled.TouchableOpacity.attrs({
    accessibilityLabel: "Menu Lateral!"
})``

export const CongruentText = styled.Text`
    text-align: center;
    font-size: 50px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const Title = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const Main = styled.View`
    flex: 1;
`

export const Form = styled.View`
    align-items: center;
    justify-content: space-around;
    flex: 1;
    margin: 40px 0;
`

export const Button = styled.TouchableOpacity`
    align-items: center;
    padding: 15px 0px;
    width: 200px;
    border-radius: 32px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`

export const ButtonText = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`