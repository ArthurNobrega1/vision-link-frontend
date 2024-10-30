import NavDevices from "@components/NavDevices";
import { Container, Header, Main, Navs, Title } from "./styles";
import { ScrollView } from "react-native";

export default function Devices() {
    return (
        <Container>
            <Header>
                <Title>Configure o seu dispositivo</Title>
            </Header>
            <Main>
                <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
                    <Navs>
                        <NavDevices name={'GPS'} nameIcon={"map-marker-radius"} link="home" iconType="MaterialCommunityIcons" flexDirection="row-reverse" />
                        <NavDevices name={'Trajeto específico'} nameIcon={"route"} link="home" iconType="FontAwesome5" flexDirection="row" />
                        <NavDevices name={'Auxiliar do dispositivo'} nameIcon={"robot-happy"} link="home" iconType="MaterialCommunityIcons" flexDirection="row-reverse" />
                        <NavDevices name={'Nome do dispositivo'} nameIcon={"bluetooth"} link="home" iconType="MaterialCommunityIcons" flexDirection="row" />
                    </Navs>
                </ScrollView>
            </Main>
        </Container>
    )
}
