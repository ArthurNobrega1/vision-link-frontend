import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
`

export const UserImageDefault = styled.View.attrs({
    accessibilityLabel: "Foto do Usuário!"
})`
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_200};
    align-items: center;
    width: 130px;
    padding: 40px 5px;
    border-radius: 100px;
`

export const UserImageDefaultText = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    width: 90%;
    text-align: center;
    flex-wrap: wrap;
`

export const UserDataField = styled.View`
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_300};
    width: 80%;
    height: 60%;
    margin-left: -20%;
`

export const UserData = styled.View`
    width: 70%;
`

export const UserDataName = styled.Text`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const UserDataAge = styled.Text`
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const UserImage = styled.Image.attrs({
    accessibilityLabel: "Foto do Usuário!"
})`
    align-items: center;
    padding: 60px;
    border-radius: 100px;
`