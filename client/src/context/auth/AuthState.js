

import React, { useReducer } from 'react';
import axios from 'axios';
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

export type FormData = {| name: string, email: string, password: string |};

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
   const register = async (formData: FormData) => {
    const config = 
    {
      headers: 
      {
        'Content-Type': 'application/json'
      }
    }
    
    try
    {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data
      });
    }
    catch(err)
    {
      dispatch({
        type: 'REGISTER_FAIL',
        payload: err.response.data.msg
      });
    }
   }

   //Load User
   const loadUser = () => console.log('loadUser');

   // Login User
   const login = () => console.log('login');

   // Logout
   const logout = () => console.log('logout');

   // Clear Errors
   const clearErrors = () => dispatch({ type: 'CLEAR_ERRORS' })

   return (
    <AuthContext.Provider
      value={{ 
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      { props.children }
    </AuthContext.Provider>
   );
};

export default AuthState;