import { Container, LoadIndicator, Logo } from "./styles"
import logoImg from '@assets/logo.png'

export default function Loading() {
    return (
        <Container>
            <Logo source={logoImg} />
            <LoadIndicator />
        </Container>
    )
}