import { LOGIN, LOGOUT, SET_FILTER } from "./actionTypes";

export const performLogin = account => ({
  type: LOGIN,
  payload: {
    account
  }
});

export const performLogout = () => ({
  type: LOGOUT
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
