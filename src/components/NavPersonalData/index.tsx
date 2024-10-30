import { useNavigation } from "@react-navigation/native";
import { Container, NameElement } from "./styles";
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import theme from "src/theme";
import { useCallback } from "react";

type RootParamList = {
    home: undefined
    settings: undefined
    devices: undefined
    personalData: undefined
}

type FeatherNameType = keyof typeof Feather.glyphMap;
type FontAwesome5NameType = keyof typeof FontAwesome5.glyphMap;

type Props = {
    name: string;
    nameIcon: string;
    link: keyof RootParamList;
    iconType: "Feather" | "FontAwesome5";
}

export default function NavPersonalData({ name, nameIcon, link, iconType }: Props) {
    const navigation = useNavigation();

    const handleGoToPage = useCallback(() => {
        navigation.navigate(link);
    }, [navigation, link]);
    

    return (
        <Container onPress={handleGoToPage}>
            <NameElement>{name}</NameElement>
            {iconType === "Feather" ? (
                <Feather name={nameIcon as FeatherNameType} size={100} color={theme.COLORS.SECONDARY_200} />
            ) : (
                <FontAwesome5 raised name={nameIcon as FontAwesome5NameType} size={100} color={theme.COLORS.SECONDARY_200} />
            )}
        </Container>
    );
}
