import { ScrollView } from "react-native";
import { Container, Header, LoadIndicator, Main, Navs, Title } from "./styles";
import NavPersonalData from "@components/NavPersonalData";
import InfoPersonalData from "@components/InfoPersonalData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { API_URL } from "@env";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getToken } from "src/utils/token";

export default function PersonalData() {
    const navigation = useNavigation()

    const [userDataLoaded, setUserDataLoaded] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [userAvatar, setUserAvatar] = useState(null)
    const [userUsername, setUserUsername] = useState('')

    const handleGetUserData = async () => {
        try {
            const token = await getToken()
            const response = await axios.get(`${API_URL}/sessions/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const userData = response.data

            setUserUsername(userData.username)
            setUserAvatar(userData.avatar)
            setUserEmail(userData.email)

            setUserDataLoaded(true)
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

    useEffect(() => {
        handleGetUserData()
    }, [])

    return (
        <Container>
            {
                userDataLoaded
                    ? <>
                        <Header>
                            <Title>Meu perfil</Title>
                        </Header>
                        <Main>
                            <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
                                <InfoPersonalData userUsername={userUsername} userEmail={userEmail} userAvatar={userAvatar} />
                                <Navs>
                                    <NavPersonalData name={'Geral'} nameIcon={"settings"} link="general" iconType="Feather" />
                                    <NavPersonalData name={'Sair'} nameIcon={"log-out"} link="login" iconType="Feather" />
                                </Navs>
                            </ScrollView>
                        </Main>
                    </>
                    : <LoadIndicator />
            }
        </Container>
    )
}