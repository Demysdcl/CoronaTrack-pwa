import firebase from '../FirebaseConnection';

export const verifyLogin = () => {
  return dispatch => {
    const user = firebase.auth().currentUser;
    if (user) {
      dispatch({
        type: 'SET_STATUS',
        payload: {
          status: 1,
        },
      });
    } else {
      dispatch({
        type: 'SET_STATUS',
        payload: {
          status: 2,
        },
      });
    }
  };
};

export const setUID = uid => {
  return dispatch => {
    dispatch({
      type: 'SET_UID',
      payload: {
        uid,
      },
    });
  };
};

export const createNewUser = (email, password, cpf) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch({
          type: 'SET_INFOS',
          payload: {
            email: user.email,
          },
        });

        dispatch({
          type: 'SET_ERROR',
          payload: {
            errorMessage: '',
          },
        });

        firebase
          .database()
          .ref(`Users/${user.uid}`)
          .set({ cpf });
      })
      .catch(error => {
        let errorMessage = '';
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'E-mail já utilizado';
            break;
          case 'auth/invalid-email':
            errorMessage = 'E-mail inválido!';
            break;
          case 'auth/operation-not-allowed':
            errorMessage = 'Tente novamente mais tarde';
            break;
          case 'auth/weak-password':
            errorMessage = 'Digite uma senha melhor!';
            break;
          default:
        }
        dispatch({
          type: 'SET_ERROR',
          payload: {
            errorMessage,
          },
        });
      });
  };
};

export const SignInAction = (email, password) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        const { uid } = firebase.auth().currentUser;

        dispatch({
          type: 'SET_UID',
          payload: {
            uid,
          },
        });
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            alert('Email inválido!');
            break;
          case 'auth/user-disabled':
            alert('Seu usuário está desativado!');
            break;
          case 'auth/user-not-found':
            alert('Não existe este usuário!');
            break;
          case 'auth/wrong-password':
            alert('E-mail e/ou senha errados!');
            break;
          default:
        }
      });
  };
};
