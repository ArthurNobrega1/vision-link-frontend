import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`

export const Logo = styled.Image.attrs({
    accessibilityLabel: "Logo Vision Link!"
})`
    margin-left: 30px;
`
export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    accessibilityLabel: "Carregando!",
    color: theme.COLORS.SECONDARY_200
}))`
    position: absolute;
    bottom: 25%;
`