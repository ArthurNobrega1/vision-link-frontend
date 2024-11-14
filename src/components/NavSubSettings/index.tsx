import { useNavigation } from "@react-navigation/native"
import { Arrow, ArrowText, Container, Section, SectionText } from "./styles"
import { useCallback } from "react"
import { Alert } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getToken } from "src/utils/token"
import axios from "axios"
import { API_URL } from "@env"

type Props = {
    name: string
    link: keyof ReactNavigation.RootParamList
}

export default function NavSubSettings({ name, link }: Props) {
    const navigation = useNavigation()

    const handleRemoveUser = async () => {
        try {
            const token = await getToken()
            await axios.delete(`${API_URL}/users/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || 'Erro desconhecido'
                Alert.alert('Erro', errorMessage)
                if (errorMessage === 'Sessão inválida') {
                    await AsyncStorage.removeItem('@userToken')
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'login' }]
                    })
                }
            } else {
                Alert.alert('Erro', 'Erro desconhecido')
            }
        }
    }

    const handleGoToPage = useCallback(() => {
        if (link === 'login') {
            Alert.alert(
                "Confirmar ação",
                "Tem certeza de que deseja excluir essa conta?",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    {
                        text: "Sim",
                        onPress: async () => {
                            await handleRemoveUser()
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
        <Container onPress={handleGoToPage} accessibilityLabel={name}>
            <Section>
                <SectionText>
                    {name}
                </SectionText>
            </Section>
            <Arrow>
                <ArrowText>
                    &gt;
                </ArrowText>
            </Arrow>
        </Container>
    )
}