import { ImageSourcePropType } from "react-native";
import { Container, UserDataField, UserData, UserDataAge, UserDataName, UserImage, UserImageDefault, UserImageDefaultText } from "./styles";

type Props = {
    userUsername: string
    userEmail: string
    userAvatar: ImageSourcePropType | null
}

export default function InfoPersonalData({ userUsername, userEmail, userAvatar }: Props) {
    return (
        <Container>
            <UserDataField>
                <UserData>
                    <UserDataName>Nome: {userUsername ? userUsername : ''}</UserDataName>
                    <UserDataAge>E-mail: {userEmail ? userEmail : ''}</UserDataAge>
                </UserData>
            </UserDataField>
            {userAvatar ? (
                <UserImage source={userAvatar} />
            ) : (
                <UserImageDefault>
                    <UserImageDefaultText>FOTO DO USUÁRIO</UserImageDefaultText>
                </UserImageDefault>
            )}
        </Container>
    )
}