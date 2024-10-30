import buddyImg from '@assets/buddy.png';
import React from 'react'
import { Buddy, Container, Header, Title } from './styles';
import NavSubSettings from '@components/NavSubSettings';

export default function Privacy() {
  return (
    <Container>
      <Header>
        <Title>Privacidade</Title>
      </Header>
      <NavSubSettings name={'Permissão Localização'} />
      <Buddy source={buddyImg} />
    </Container>
  )
}