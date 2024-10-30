import { useEffect, useRef } from "react";
import { BuddyImg, Container, Main, MainText } from "./styles";
import buddyImg from '@assets/buddy.png';
import { AccessibilityInfo, findNodeHandle } from "react-native";

export default function Buddy() {
  const mainTextRef = useRef(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (mainTextRef.current) {
        const node = findNodeHandle(mainTextRef.current)
        if (node) {
          AccessibilityInfo.setAccessibilityFocus(node)
        }
      }
    }, 100)

    return () => clearTimeout(timeout);
  }, [])
  return (
    <Container>
      <BuddyImg source={buddyImg} />
      <Main>
        <MainText ref={mainTextRef}>
          Olá, sou seu amigo virtual, o Vision Buddy! Estarei aqui para lhe ajudar, qualquer coisa é só falar! :)
        </MainText>
      </Main>
    </Container>
  )
}