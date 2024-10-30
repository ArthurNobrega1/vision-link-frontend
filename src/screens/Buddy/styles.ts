import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const Main = styled.View.attrs({
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5
})`
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_100};
    width: 80%;
    padding: 10px 30px;
    border-radius: 30px;
    align-items: center;
`

export const MainText = styled.Text`
    width: 100%;
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`

export const BuddyImg = styled.Image.attrs({
    accessible: true,
    accessibilityLabel: "Vision Buddy!"
})`
    height: 280px;
    width: 180px;
`