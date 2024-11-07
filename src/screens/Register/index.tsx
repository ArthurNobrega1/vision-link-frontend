import { Arrow, ArrowText, Button, Buttons, ButtonText, Congruent, CongruentText, Container, Form, Header, Main, Title } from "./styles";
import { AccessibilityInfo, Alert, KeyboardTypeOptions, ScrollView } from "react-native";
import { findNodeHandle } from "react-native";
import { useEffect, useRef, useState } from "react";
import InputRegister from "@components/InputRegister";
import axios from "axios";
import { API_URL } from '@env';

type IInput = {
    placeholder: string
    iconName: string
    iconSize?: number
    iconType: 'Ionicons' | 'FontAwesome' | 'Fontisto'
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
    column: 'fullName' | 'username' | 'email' | 'phone' | 'password' | 'confirmPassword'
}

const inputs: IInput[] = [
    {
        iconName: "mail",
        placeholder: "Email",
        iconType: "Ionicons",
        keyboardType: "email-address",
        column: 'email'
    },
    {
        iconName: "user-circle-o",
        placeholder: "Nome completo",
        iconType: "FontAwesome",
        column: 'fullName'
    },
    {
        iconName: "user-o",
        placeholder: "Nome de usuário",
        iconType: "FontAwesome",
        column: 'username'
    },
    {
        iconName: "phone",
        placeholder: "Telefone do tutor",
        iconType: "FontAwesome",
        keyboardType: "phone-pad",
        column: 'phone'
    },
    {
        iconName: "locked",
        placeholder: "Senha",
        iconType: "Fontisto",
        secureTextEntry: true,
        column: 'password'
    },
    {
        iconName: "lock",
        placeholder: "Confirmar senha",
        iconType: "FontAwesome",
        iconSize: 44,
        secureTextEntry: true,
        column: 'confirmPassword'
    }
]


export default function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    })
    const titleRef = useRef(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (titleRef.current) {
                const node = findNodeHandle(titleRef.current)
                if (node) {
                    AccessibilityInfo.setAccessibilityFocus(node)
                }
            }
        }, 100)

        return () => clearTimeout(timeout);
    }, [])

    const handleSubmit = async () => {
        const { password, confirmPassword, ...rest } = formData;

        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem');
            return;
        }

        try {
            await axios.post(`${API_URL}/users/`, {
                ...rest,
                password
            });
            Alert.alert('Sucesso', 'Conta criada com sucesso!');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || 'Erro desconhecido'
                Alert.alert('Erro', errorMessage)
                console.log('Erro:', errorMessage)
            } else {
                Alert.alert('Erro', 'Erro desconhecido')
                console.log('Erro: Desconhecido')
            }
        }
    }

    const handleInputChange = (key: string, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value
        }))
    }

    return (
        <Container>
            <Header>
                <Buttons>
                    <Arrow>
                        <ArrowText>&lt;</ArrowText>
                    </Arrow>
                    <Congruent>
                        <CongruentText>&equiv;</CongruentText>
                    </Congruent>
                </Buttons>
                <Title ref={titleRef}>Criar Conta</Title>
            </Header>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled">
                <Form>
                    {
                        inputs.map((input, index) => {
                            return <InputRegister key={index} iconName={input.iconName} placeholder={input.placeholder} iconType={input.iconType} iconSize={input.iconSize} keyboardType={input.keyboardType} secureTextEntry={input.secureTextEntry} value={formData[input.column]} onChangeText={(text) => handleInputChange(input.column, text)} />
                        })
                    }
                    <Button onPress={handleSubmit}>
                        <ButtonText>Criar Conta</ButtonText>
                    </Button>
                </Form>
            </ScrollView>
        </Container>
    )
}