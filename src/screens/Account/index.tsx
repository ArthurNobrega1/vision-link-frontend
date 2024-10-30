import InfoAccount from "@components/InfoAccount";
import { Buddy, Container, Header, Title } from "./styles";
import buddyImg from '@assets/buddy.png';

export default function Account() {
    return (
        <Container>
            <Header>
                <Title>Conta</Title>
            </Header>
            <InfoAccount userName="" userImagePath={undefined} userEmail="" userPassword="" userPhone="" />
            <Buddy source={buddyImg} />
        </Container>
    )
}