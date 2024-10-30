import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const Header = styled.View.attrs({
    accessibilityLabel: "Segurança!"
})`
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 70%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    border-radius: 20px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-transform: uppercase;
`

export const Main = styled.View`
    align-items: center;
    width: 100%;
`
export const Buddy = styled.Image.attrs({
    accessibilityLabel: "Vision Buddy!"
})`
    height: 230px;
    width: 150px;
`