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
