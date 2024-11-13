import { useNavigation } from "@react-navigation/native";
import { Container, NameElement } from "./styles";
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import theme from "src/theme";
import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


type FeatherNameType = keyof typeof Feather.glyphMap;
type FontAwesome5NameType = keyof typeof FontAwesome5.glyphMap;

type Props = {
    name: string;
    nameIcon: string;
    link: keyof ReactNavigation.RootParamList;
    iconType: "Feather" | "FontAwesome5";
}

export default function NavPersonalData({ name, nameIcon, link, iconType }: Props) {
    const navigation = useNavigation()

    const handleGoToPage = useCallback(() => {
        if (link === 'login') {
            Alert.alert(
                "Confirmar ação",
                "Tem certeza de que deseja sair da conta?",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    {
                        text: "Sim",
                        onPress: async () => {
                            await AsyncStorage.removeItem('@userToken')
                            navigation.reset({
                                index: 0,
                                routes: [{ name: link }]
                            })
                        }
                    }
                ]
            );
        } else {
            navigation.navigate(link)
        }
    }, [navigation, link])


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
