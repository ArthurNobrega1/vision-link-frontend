import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`

export const Header = styled.View.attrs({
    accessibilityLabel: "Configurações!"
})`
    position: relative;
    align-items: center;
    justify-content: center;
    margin: 70px 0 40px 0;
    height: 35px;
    width: 80%;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    border-radius: 20px;
    overflow: hidden;
`

export const SettingsIcon = styled.Image`
    position: absolute;
    left: 0;
    top: -90%;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-transform: uppercase;
`

export const Main = styled.View`
    align-items: center;
    width: 100%;
`

export const BuddyArea = styled.View.attrs({
    accessibilityLabel: "Vision Buddy!"
})`
    flex: 1;
    justify-content: center;
    width: 100%;
`

export const Buddy = styled.Image`
    align-self: flex-end;
    margin-right: 50px;
`