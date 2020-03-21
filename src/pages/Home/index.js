import React from 'react';

// Assets
import logo from '../../assets/images/logo.png';

// Styles
import { Container, Content, Image } from './styles';

export default function Home() {
  return (
    <Container>
      <Content>
        <Image src={logo} alt="Logo" />
      </Content>
    </Container>
  );
}
