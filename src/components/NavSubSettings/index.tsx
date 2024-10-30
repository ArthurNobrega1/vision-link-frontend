import { Arrow, ArrowText, Container, Section, SectionText } from "./styles"

type Props = {
    name: string
    // link: keyof ReactNavigation.RootParamList
}

export default function NavSubSettings({ name }: Props) {
    return (
        <Container accessibilityLabel={name}>
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