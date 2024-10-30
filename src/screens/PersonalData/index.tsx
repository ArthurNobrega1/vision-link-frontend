import { ScrollView } from "react-native";
import { Container, Header, Main, Navs, Title } from "./styles";
import NavPersonalData from "@components/NavPersonalData";
import InfoPersonalData from "@components/InfoPersonalData";

export default function PersonalData() {
    return (
        <Container>
            <Header>
                <Title>Meu perfil</Title>
            </Header>
            <Main>
                <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
                    <InfoPersonalData userName="" userAge={null} userImagePath={null} />
                    <Navs>
                        <NavPersonalData name={'Geral'} nameIcon={"settings"} link="home" iconType="Feather" />
                        <NavPersonalData name={'Cadastro'} nameIcon={"user-edit"} link="home" iconType="FontAwesome5" />
                    </Navs>
                </ScrollView>
            </Main>
        </Container>
    )
}