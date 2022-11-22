import {GET_USER_DETAILS, SUCCESS} from '../Actions/Actions';

export const initalState = {
  loginUserData: {},
};

export default (state = initalState, action) => {
  switch (action.type) {
    case `${GET_USER_DETAILS}_${SUCCESS}`: {
      return {loginUserData: action.payload};
    }
    default:
      return state;
  }
};
