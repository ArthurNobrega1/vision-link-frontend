import { useNavigation } from "@react-navigation/native";
import { Arrow, ArrowText, Container, Section, SectionText } from "./styles";
import { useCallback } from "react";

type Props = {
    name: string
    link: keyof ReactNavigation.RootParamList
}

export default function NavSettings({ name, link }: Props) {
    const navigation = useNavigation()

    const handleGoToPage = useCallback(() => {
        navigation.navigate(link)
    }, [navigation, link])

    return (
        <Container accessibilityLabel={name} onPress={handleGoToPage}>
            <Section>
                <SectionText>
                    {name}
                </SectionText>
            </Section>
            <Arrow>
                <ArrowText>
                    &gt;
                </ArrowText>
            </Arrow>
        </Container>
    )
}