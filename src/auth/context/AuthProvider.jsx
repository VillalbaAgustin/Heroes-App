import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

/* const initialState = {
  logged: false,
}; */

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return {
    logged: !!user,
    user: user,
  };
};

//Component que provee de información a toda la app
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const onLogin = (name = '') => {
    const user = { id: 'ABC', name: name };

    const action = {
      type: types.login,
      payload:  user ,
    };

    localStorage.setItem('user', JSON.stringify(user)); //el localStorage no puede recibir un objeto

    dispatch(action);
  };

  const logout = () =>{
    localStorage.removeItem('user');
    const action = {
      type: types.logout,
      payload: undefined,
    };
    dispatch(action);
  }

  return (
    <AuthContext.Provider
      value={{                              /* provee de estoy valores a los hijos */
        ...authState,
        login: onLogin,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
