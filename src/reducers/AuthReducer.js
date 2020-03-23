const initialState = {
  name: '',
  uid: '',
  status: 0,
  cpf: '',
  errorMessage: '',
};

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: payload.name };
    case 'SET_INFOS':
      return {
        ...state,
        email: payload.email,
        name: payload.nickName,
        cpf: payload.cpf,
      };
    case 'SET_UID':
      return { ...state, status: 1, uid: payload.uid };

    case 'SET_ERROR':
      return { ...state, errorMessage: payload.errorMessage };

    default:
      return state;
  }
};
