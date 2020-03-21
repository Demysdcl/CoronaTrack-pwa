import React from "react";

// Assets
import logo from '../../assets/images/imageTemp.jpeg'


// Styles
import { Container, Content, Image } from "./styles";

export default function Home() {
  return (
    <Container>
      <Content>
        <Image src={logo} alt="Logo" />
        <h1>Corona Track</h1>
      </Content>
    </Container>
  );
}
