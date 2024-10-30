import { useNavigation } from "@react-navigation/native";
import { Container, IconContainer, NameElement } from "./styles";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from "src/theme";
import { useCallback } from "react";

type FeatherNameType = keyof typeof Feather.glyphMap;
type MaterialCommunityNameType = keyof typeof MaterialCommunityIcons.glyphMap;

type Props = {
    name: string
    nameIcon: string
    link: keyof ReactNavigation.RootParamList
    iconType: "Feather" | "MaterialCommunityIcons"
}

export default function NavHome({ name, nameIcon, link, iconType }: Props) {
    const navigation = useNavigation()

    const handleGoToPage = useCallback(() => {
        navigation.navigate(link)
    }, [navigation, link])
    

    return (
        <Container onPress={handleGoToPage}>
            <NameElement>{name}</NameElement>
            <IconContainer>
                {iconType === "Feather" ? (
                    <Feather name={nameIcon as FeatherNameType} size={100} color={theme.COLORS.SECONDARY_200} />
                ) : (
                    <MaterialCommunityIcons raised name={nameIcon as MaterialCommunityNameType} size={100} color={theme.COLORS.SECONDARY_200} />
                )}
            </IconContainer>
        </Container>
    );
}
