import { useState } from "react";
import { Arrow, Buddy, Container, CustomSwitch, Header, Language, Main, NameElement, Notifications, Select, Title } from "./styles";
import buddyImg from '@assets/buddy.png';

export default function General() {
    const [selected, setSelected] = useState("")
    const [notifications, setNotifications] = useState(false)

    const data = [
        { key: '1', value: 'Português' },
        { key: '2', value: 'Inglês' },
        { key: '3', value: 'Espanhol' },
        { key: '4', value: 'Francês' },
    ]

    return (
        <Container>
            <Header>
                <Title>Geral</Title>
            </Header>
            <Main>
                <Language>
                    <NameElement>Idioma</NameElement>
                    <Select
                        setSelected={(val: string) => setSelected(val)}
                        data={data}
                        save="value"
                        placeholder="Selecione"
                        search={false}
                        arrowicon={<Arrow />}
                        maxHeight={100}
                    />
                </Language>
                <Notifications>
                    <NameElement>Notificações</NameElement>
                    <CustomSwitch
                        onValueChange={(val: boolean) => setNotifications(val)}
                        value={notifications}
                    />
                </Notifications>
            </Main>
            <Buddy source={buddyImg} />
        </Container>
    );
}
