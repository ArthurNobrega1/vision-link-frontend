import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    align-items: center;
    width: 95%;
`

export const Section = styled.View`
    align-items: center;
    width: 65%;
    padding: 5px 0;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    border-radius: 20px;
`

export const SectionText = styled.Text`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`

export const Arrow = styled.View`
    align-items: center;
    justify-content: center;
`

export const ArrowText = styled.Text`
    text-align: center;
    line-height: 50px;
    font-size: 50px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    accessibilityLabel: "Carregando!",
    color: theme.COLORS.SECONDARY_200
}))`
    position: absolute;
    top: 50%;
    left: 50%;
`