import React from 'react';

// Assets
import logo from '../../assets/images/logo.png';

// Styles
import { Container, Image } from './styles';

export default function Login() {
  return (
    <Container>
      <Image src={logo} alt="Logo" />
    </Container>
  );
}
