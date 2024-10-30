import { ImageSourcePropType } from "react-native";
import { UserData, UserDataText, UserImage, UserImageDefault, UserImageDefaultText } from "./styles";

type Props = {
    userName: string
    userEmail: string
    userPhone: string
    userPassword: string
    userImagePath: ImageSourcePropType | undefined
}

export default function InfoAccount({ userName, userEmail, userPhone, userPassword, userImagePath }: Props) {
    return (
        <>
            {userImagePath ? (
                <UserImage source={userImagePath} />
            ) : (
                <UserImageDefault>
                    <UserImageDefaultText>FOTO DO USUÁRIO</UserImageDefaultText>
                </UserImageDefault>
            )}
            <UserData>
                <UserDataText>Nome: {userName ? userName : ''}</UserDataText>
                <UserDataText>E-mail: {userEmail ? userEmail : ''}</UserDataText>
                <UserDataText>Telefone: {userPhone ? userPhone : ''}</UserDataText>
                <UserDataText>Senha: {userPassword ? userPassword : ''}</UserDataText>
            </UserData>
        </>
    )
}