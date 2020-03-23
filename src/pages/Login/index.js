import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaFacebookSquare } from 'react-icons/fa';

// Components
import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

// Actions
import { SignInAction, loginWithFacebook } from '../../actions/AuthActions';

// Assets
import logo from '../../assets/images/logo.png';

// Styles
import { Container, Image, Content, Error, Line } from './styles';

export default function Home() {
  const { errorMessage } = useSelector(state => state.auth);

  const Dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function login() {
    setLoading(true);
    Dispatch(SignInAction(email, password))
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function loginFacebook() {
    Dispatch(loginWithFacebook(email, password));
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
      <Loading open={loading} />
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

        <Button variant="contained" theme="primary" onClick={() => login()}>
          Entrar
        </Button>

        <Line>
          <hr />
          <p>ou</p>
          <hr />
        </Line>

        <Button
          variant="contained"
          theme="segundary"
          background="#235DE3"
          onClick={() => loginFacebook()}
          startIcon={<FaFacebookSquare />}
        >
          Entrar com Facebook
        </Button>

        <Button
          variant="contained"
          theme="segundary"
          onClick={() => console.log('')}
        >
          Cadastre-se
        </Button>
      </Content>
    </Container>
  );
}
