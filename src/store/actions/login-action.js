
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => ({
  type: LOGIN,
  payload: { username, password }
});

export const logout = () => ({
  type: LOGOUT
});
