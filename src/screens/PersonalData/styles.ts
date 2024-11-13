import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`

export const Header = styled.View.attrs({
    accessibilityLabel: "Meu Perfil!"
})`
    align-items: center;
    justify-content: center;
    margin: 70px 0 40px 0;
    height: 35px;
    width: 90%;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    border-radius: 20px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-transform: uppercase;
`

export const Main = styled.View`
    width: 100%;
    align-items: center;
`

export const Navs = styled.View`
align-items: center;
gap: 50px;
height: 100%;
margin: 40px 0;
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    accessibilityLabel: "Carregando!",
    color: theme.COLORS.SECONDARY_200
}))`
    position: absolute;
    top: 50%;
    left: 50%;
`