import React from 'react';
// Assets
import logo from '../../assets/images/logo.png';

import { signOut } from '../../actions/AuthActions';
// Styles
import { Container, Image } from './styles';

export default function Home() {
  function signOute() {
    signOut();
  }
  return (
    <Container>
      <Image src={logo} alt="Logo" />
      <h1>Home</h1>
      <p onClick={() => signOute()}>Sair</p>
    </Container>
  );
}
