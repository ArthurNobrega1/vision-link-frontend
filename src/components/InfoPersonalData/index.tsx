import { ImageSourcePropType } from "react-native";
import { Container, UserDataField, UserData, UserDataAge, UserDataName, UserImage, UserImageDefault, UserImageDefaultText } from "./styles";

type Props = {
    userName: string
    userAge: number | null
    userImagePath: ImageSourcePropType | null
}

export default function InfoPersonalData({ userName, userAge, userImagePath }: Props) {
    return (
        <Container>
            <UserDataField>
                <UserData>
                    <UserDataName>Nome: {userName ? userName : ''}</UserDataName>
                    <UserDataAge>Idade: {userAge ? userAge : ''}</UserDataAge>
                </UserData>
            </UserDataField>
            {userImagePath ? (
                <UserImage source={userImagePath} />
            ) : (
                <UserImageDefault>
                    <UserImageDefaultText>FOTO DO USUÁRIO</UserImageDefaultText>
                </UserImageDefault>
            )}
        </Container>
    )
}