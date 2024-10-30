import NavSubSettings from "@components/NavSubSettings";
import { Buddy, Container, Header, Main, Title } from "./styles";
import buddyImg from '@assets/buddy.png';

export default function Security() {
    return (
        <Container>
            <Header>
                <Title>Segurança</Title>
            </Header>
            <Main>
                <NavSubSettings name={'Alterar senha'} />
                <NavSubSettings name={'Verificação Duas Etapas'} />
                <NavSubSettings name={'Excluir conta'} />
            </Main>
            <Buddy source={buddyImg} />
        </Container>
    )
}