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
    return new Promise((resolve, reject) => {
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
          resolve({ status: 'success' });
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
          reject({ status: 'error' });
        });
    });
  };
};

export const SignInAction = (email, password) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          const { uid } = firebase.auth().currentUser;

          dispatch({
            type: 'SET_UID',
            payload: {
              uid,
            },
          }).then(() => {
            resolve({ success: true });
          });
        })
        .catch(error => {
          let errorMessage = '';
          switch (error.code) {
            case 'auth/invalid-email':
              errorMessage = 'Email inválido!';
              break;
            case 'auth/user-disabled':
              errorMessage = 'Seu usuário está desativado!';
              break;
            case 'auth/user-not-found':
              errorMessage = 'Não existe este usuário!';
              break;
            case 'auth/wrong-password':
              errorMessage = 'E-mail e/ou senha errados!';
              break;
            default:
          }
          reject(new Error({ error: errorMessage }));
        });
    });
  };
};

export const loginWithFacebook = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const token = result.credential.accessToken;
          console.log(token);
          // The signed-in user info.
          const { user } = result;
          console.log(user);
          // ...
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  };
};
