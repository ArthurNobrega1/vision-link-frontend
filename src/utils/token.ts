import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

export const getToken = async () => {
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