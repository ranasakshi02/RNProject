import {LOGOUT, SIGN_IN, SUCCESS} from '../Actions/Actions';
export const initialState = {
  Id: undefined,
  Name: undefined,
  Email: undefined,
  Token: undefined,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case `${SIGN_IN}_${SUCCESS}`: {
      return action.payload;
    }
    case `${LOGOUT}_${SUCCESS}`: {
      return action.payload;
    }
    default:
      return state;
  }
};
