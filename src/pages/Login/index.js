import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Button from '../../components/Button';
import Input from '../../components/Input';
// Actions
import { createNewUser } from '../../actions/AuthActions';

// Assets
import logo from '../../assets/images/logo.png';

// Styles
import { Container, Image, Content, Error } from './styles';

export default function Home() {
  const { errorMessage } = useSelector(state => state.auth);

  const Dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    Dispatch(createNewUser(email, password));
  }

  useEffect(() => {
    if (errorMessage !== '') {
      setPassword('');
    } else {
      setEmail('');
      setPassword('');
    }
  }, [errorMessage]);

  return (
    <Container>
      <Image src={logo} alt="Logo" />
      <Content>
        <Input
          required
          label="E-mail"
          value={email}
          variant="outlined"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <Input
          variant="outlined"
          label="Password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        {errorMessage !== '' && <Error>{errorMessage}</Error>}

        <Button
          variant="contained"
          theme="secondary"
          background="#000"
          onClick={() => signUp()}
          endIcon=""
        >
          Entrar
        </Button>
      </Content>
    </Container>
  );
}
