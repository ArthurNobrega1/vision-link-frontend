// navDevices/index.tsx

import theme from "src/theme";
import { Container, IconContainer, NameElement } from "./styles";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

type RootParamList = {
    home: undefined
    settings: undefined
    devices: undefined
}

type FontAwesome5NameType = keyof typeof FontAwesome5.glyphMap;
type MaterialCommunityNameType = keyof typeof MaterialCommunityIcons.glyphMap;

export type Props = {
    name: string;
    nameIcon: string;
    link: keyof RootParamList;
    iconType: "FontAwesome5" | "MaterialCommunityIcons";
    flexDirection: 'row' | 'row-reverse';
}

export default function NavDevices({ name, nameIcon, link, iconType, flexDirection }: Props) {
    const navigation = useNavigation();

    const handleGoToPage = useCallback(() => {
        navigation.navigate(link);
    }, [navigation, link]);

    return (
        <Container onPress={handleGoToPage} flexDirection={flexDirection}>
            <NameElement>{name}</NameElement>
            <IconContainer>
                {iconType === "FontAwesome5" ? (
                    <FontAwesome5 name={nameIcon as FontAwesome5NameType} size={100} color={theme.COLORS.PRIMARY_200} />
                ) : (
                    <MaterialCommunityIcons raised name={nameIcon as MaterialCommunityNameType} size={100} color={theme.COLORS.PRIMARY_200} />
                )}
            </IconContainer>
        </Container>
    )
}
