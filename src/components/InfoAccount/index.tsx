import { ImageSourcePropType } from "react-native";
import { UserData, UserDataText, UserImage, UserImageDefault, UserImageDefaultText } from "./styles";

type Props = {
    userFullname: string
    userEmail: string
    userPhone: string
    userAvatar: ImageSourcePropType | null
}

export default function InfoAccount({ userFullname, userEmail, userPhone, userAvatar }: Props) {
    return (
        <>
            {userAvatar ? (
                <UserImage source={userAvatar} />
            ) : (
                <UserImageDefault>
                    <UserImageDefaultText>FOTO DO USUÁRIO</UserImageDefaultText>
                </UserImageDefault>
            )}
            <UserData>
                <UserDataText>Nome: {userFullname ? userFullname : ''}</UserDataText>
                <UserDataText>E-mail: {userEmail ? userEmail : ''}</UserDataText>
                <UserDataText>Telefone: {userPhone ? userPhone : ''}</UserDataText>
            </UserData>
        </>
    )
}