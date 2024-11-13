import InfoAccount from "@components/InfoAccount";
import { Buddy, Container, Header, LoadIndicator, Title } from "./styles";
import buddyImg from '@assets/buddy.png';
import axios from "axios";
import { API_URL } from "@env";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Account() {
    const [userDataLoaded, setUserDataLoaded] = useState(false)
    const [userFullname, setUserFullname] = useState('')
    const [userAvatar, setUserAvatar] = useState(null)
    const [userEmail, setUserEmail] = useState('')
    const [userPhone, setUserPhone] = useState('')

    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('@userToken')
            if (token === null) {
                Alert.alert('Token não encontrado')
            } else {
                return token
            }
        } catch (error) {
            Alert.alert('Erro', '"Erro ao recuperar o token')
        }
    }

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