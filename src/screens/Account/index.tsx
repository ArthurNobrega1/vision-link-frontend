import InfoAccount from "@components/InfoAccount";
import { Buddy, Container, Header, LoadIndicator, Title } from "./styles";
import buddyImg from '@assets/buddy.png';
import axios from "axios";
import { API_URL } from "@env";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getToken } from "src/utils/token";

export default function Account() {
    const navigation = useNavigation()

    const [userDataLoaded, setUserDataLoaded] = useState(false)
    const [userFullname, setUserFullname] = useState('')
    const [userAvatar, setUserAvatar] = useState(null)
    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const handleGetUserData = async () => {
        try {
            const token = await getToken()
            const response = await axios.get(`${API_URL}/sessions/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const userData = response.data

            setUserFullname(userData.fullName)
            setUserAvatar(userData.avatar)
            setUserEmail(userData.email)
            setUserPhone(userData.phone)

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
                            <Title>Conta</Title>
                        </Header>
                        <InfoAccount userFullname={userFullname} userAvatar={userAvatar} userEmail={userEmail} userPhone={userPhone} />
                        <Buddy source={buddyImg} />
                    </>
                    : <LoadIndicator />
            }
        </Container>
    )
}