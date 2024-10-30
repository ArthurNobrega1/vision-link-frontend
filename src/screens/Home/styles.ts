import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`

export const Header = styled.View`
    justify-content: space-around;
    height: 190px;
`

export const Buttons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 0 20px;
`

export const ArrowText = styled.Text.attrs({
    accessibilityLabel: "Voltar!"
})`
    text-align: center;
    font-size: 50px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const CongruentText = styled.Text.attrs({
    accessibilityLabel: "Menu Lateral!"
})`
    text-align: center;
    font-size: 50px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const WelcomeText = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const Main = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
`

export const Navs = styled.View`
    align-items: center;
    gap: 50px;
    height: 100%;
    margin: 40px 0;
`