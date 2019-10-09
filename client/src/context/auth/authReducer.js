// @flow

export type AuthType = 'REGISTER_SUCCESS' | 'REGISTER_FAIL' | 'USER_LOADED' | 'AUTH_ERROR' | 'LOGIN_SUCCESS' | 'LOGIN_FAIL' | 'LOGOUT' | 'CLEAR_ERRORS';

export type Auth = {|
  type: AuthType,
  payload: any
|};