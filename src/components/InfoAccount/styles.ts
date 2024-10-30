import styled from "styled-components/native"


export const UserImageDefault = styled.View.attrs({
    accessibilityLabel: "Foto do Usuário!"
})`
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    align-items: center;
    width: 130px;
    padding: 40px 5px;
    border-radius: 100px;
`

export const UserImageDefaultText = styled.Text`
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    width: 90%;
    text-align: center;
    flex-wrap: wrap;
`

export const UserImage = styled.Image.attrs({
    accessibilityLabel: "Foto do Usuário!"
})`
`

export const UserData = styled.View.attrs({
    accessibilityLabel: "Dados do Usuário!"
})`
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    width: 55%;
    padding: 15px 0;
    gap: 4px;
    border-radius: 10px;
    align-items: center;
`

export const UserDataText = styled.Text`
    width: 90%;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`