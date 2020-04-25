import { LOGIN, LOGOUT, SELECT_PATIENT, SET_FILTER } from "./actionTypes";

export const performLogin = (account) => ({
  type: LOGIN,
  payload: {
    account,
  },
});

export const performLogout = () => ({
  type: LOGOUT,
});

export const selectPatient = (patient) => ({
  type: SELECT_PATIENT,
  payload: {
    patient,
  },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
