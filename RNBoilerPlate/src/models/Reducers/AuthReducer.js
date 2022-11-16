import {SIGN_IN, SUCCESS} from '../Actions/Actions';
export const initalState = {
  Id: undefined,
  Name: undefined,
  Email: undefined,
  Token: undefined,
};
export default (state = initalState, action) => {
  switch (action.type) {
    case `${SIGN_IN}_${SUCCESS}`: {
      return action.payload;
    }
    default:
      return state;
  }
};
