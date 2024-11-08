import styled from "styled-components/native";

export const Input = styled.View`
    width: 100%;
    gap: 3px;
`

export const DescriptionInput = styled.Text`
    width: min-content;
    color: ${({ theme }) => theme.COLORS.PRIMARY_300};
    font-size: ${({ theme }) => theme.FONT_SIZE["2XS"]}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    flex-wrap: wrap;
    font-weight: 700;
`

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.COLORS.PLACEHOLDER2
}))`
    width: 100%;
    font-weight: bold;
    height: 38px;
    padding-left: 20px;
    font-size: ${({ theme }) => theme.FONT_SIZE['2XS']}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    border: 3px solid;
    border-color: ${({ theme }) => theme.COLORS.PRIMARY_300};
    border-radius: 20px;
    color: ${({ theme }) => theme.COLORS.PRIMARY_300};
`;