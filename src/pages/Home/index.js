import React from 'react';

// Assets
import logo from '../../assets/images/logo.jpeg';

// Styles
import { Container, Content, Image, H1 } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <Image src={logo} alt="Logo" />
        <H1>Corona Track</H1>
      </Content>
    </Container>
  );
}
