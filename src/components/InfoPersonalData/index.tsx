import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'
import { getToken } from 'src/utils/token'
import { API_URL } from '@env'
import { Container, UserDataField, UserData, UserDataAge, UserDataName, UserImage, UserImageDefault, UserImageDefaultText } from './styles'
import { Alert } from 'react-native'

type Props = {
    userUsername: string
    userEmail: string
    userAvatar: string | null
}

export default function InfoPersonalData({ userUsername, userEmail, userAvatar }: Props) {
    const [avatar, setAvatar] = useState(userAvatar)
    const [isImageLoaded, setIsImageLoaded] = useState(false)

    const avatarSource = avatar
        ? { uri: typeof avatar === 'string' ? avatar : undefined }
        : undefined

    const handleImagePicker = async () => {
        // Solicitar permissão para acessar a galeria
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!permission.granted) {
            console.log('Permissão para acessar a galeria negada')
            return
        }

        // Abrir a galeria de imagens
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })

        if (!result.canceled) {
            const { uri } = result.assets[0]
            setAvatar(uri)
            setIsImageLoaded(false)
            await updateAvatar(uri)
        }
    }

    const updateAvatar = async (uri: string) => {
        try {
            const token = await getToken()
            const formData = new FormData()
            formData.append('avatar', {
                uri,
                type: 'image/jpeg',
                name: 'avatar.jpg'
            } as unknown as Blob)

            await axios.patch(`${API_URL}/sessions/avatar`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })

        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || 'Erro desconhecido'
                Alert.alert('Erro', errorMessage)
            } else {
                Alert.alert('Erro', 'Erro desconhecido')
            }
        }
    }

    return (
        <Container>
            <UserDataField>
                <UserData>
                    <UserDataName>Nome: {userUsername ? userUsername : ''}</UserDataName>
                    <UserDataAge>E-mail: {userEmail ? userEmail : ''}</UserDataAge>
                </UserData>
            </UserDataField>
            <TouchableOpacity onPress={handleImagePicker}>
                {!isImageLoaded && (
                    <UserImageDefault>
                        <UserImageDefaultText>FOTO DO USUÁRIO</UserImageDefaultText>
                    </UserImageDefault>
                )}
                {avatar && (
                    <UserImage
                        source={avatarSource}
                        onLoad={() => setIsImageLoaded(true)}
                        style={!isImageLoaded ? { display: 'none' } : {}}
                    />
                )}
            </TouchableOpacity>
        </Container>
    )
}
