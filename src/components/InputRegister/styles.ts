import styled from "styled-components/native";

export const Input = styled.View`
    flex-direction: row-reverse;
    align-items: center;
    gap: 10px;
    height: 50px;
    width: 340px;
`

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.PLACEHOLDER
}))`
    flex: 1;
    height: 40px;
    padding-left: 20px;
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    border-radius: 20px;
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
`;