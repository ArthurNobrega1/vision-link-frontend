import NavHome from "@components/NavHome";
import { ArrowText, Buttons, CongruentText, Container, Header, Main, Navs, WelcomeText } from "./styles";
import { ScrollView } from "react-native";
import { AccessibilityInfo } from "react-native";
import { findNodeHandle } from "react-native";
import { useEffect, useRef } from "react";

export default function Home() {
    const welcomeTextRef = useRef(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (welcomeTextRef.current) {
                const node = findNodeHandle(welcomeTextRef.current)
                if (node) {
                    AccessibilityInfo.setAccessibilityFocus(node)
                }
            }
        }, 100)

        return () => clearTimeout(timeout);
    }, [])

    return (
        <Container>
            <Header>
                {/* <Buttons>
                    <ArrowText>&lt;</ArrowText>
                    <CongruentText>&equiv;</CongruentText>
                </Buttons> */}
                <WelcomeText ref={welcomeTextRef}>Seja bem vindo ao Vision Link</WelcomeText>
            </Header>
            <Main>
                <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
                    <Navs>
                        <NavHome name={'Configurações'} nameIcon={"settings"} link="settings" iconType="Feather" />
                        <NavHome name={'Dispositivo'} nameIcon={"devices"} link="devices" iconType="MaterialCommunityIcons" />
                        <NavHome name={'Dados Pessoais'} nameIcon={"user"} link="personalData" iconType="Feather" />
                    </Navs>
                </ScrollView>
            </Main>
        </Container>
    )
}