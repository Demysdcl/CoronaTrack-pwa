import React from 'react';
// Assets
import logo from '../../assets/images/logo.png';

// Styles
import { Container, Image } from './styles';

export default function Home() {
  return (
    <Container>
      <Image src={logo} alt="Logo" />
      <h1>Home</h1>
    </Container>
  );
}
