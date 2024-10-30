import NavSettings from "@components/NavSettings";
import { Container, Header, Title, Main, Buddy, BuddyArea, SettingsIcon } from "./styles";
import buddyImg from '@assets/buddy.png';
import settingsIcon from '@assets/settings-icon.png';

export default function Settings() {
    return (
        <Container>
            <Header>
                <SettingsIcon source={settingsIcon} />
                <Title>Configurações</Title>
            </Header>
            <Main>
                <NavSettings name={'Geral'} link="general" />
                <NavSettings name={'Conta'} link="account" />
                <NavSettings name={'Segurança'} link="security" />
                <NavSettings name={'Privacidade'} link="privacy" />
                <NavSettings name={'Ajuda'} link="general" />
                <NavSettings name={'Sobre'} link="general" />
            </Main>
            <BuddyArea>
                <Buddy source={buddyImg} />
            </BuddyArea>
        </Container>
    )
}