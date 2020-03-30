import { LOGIN, LOGOUT } from "../actionTypes";
import { rights } from "../../util/rights";

const initialState = {
  name: null,
  id: null,
  rights: rights.NONE
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      const { account } = action.payload;
      return {
        name: account.name,
        id: account.id,
        rights: account.rights
      };
    }
    case LOGOUT: {
      return {
        name: null,
        id: null,
        rights: rights.NONE
      };
    }
    default:
      return state;
  }
}
