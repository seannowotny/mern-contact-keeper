// @flow

import React, { useReducer } from 'react';
import uuid from 'uuid';
import AuthContext from './authContext';
import authReducer from './authReducer';

import type { Auth } from './authReducer';

export type AuthStates = {|
   token: ?string,
   isAuthenticated: ?boolean,
   loading: boolean,
   user: any, // Change later
   error: ?string
|}

type Dispatch = (Auth) => any;
//#endregion

const AuthState = (props: any) => 
{
   const initialState: AuthStates = 
   {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading: true,
      user: null,
      error: null
   };

   const [state, dispatch]: [any, Dispatch] = useReducer(authReducer, initialState);

   // Load User

   // Register User

   // Login User

   // Logout

   // Clear Errors

   return (
    <AuthContext.Provider
      value={{ 
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error
      }}
    >
      { props.children }
    </AuthContext.Provider>
   );
};

export default AuthState;