import {GET_USER_DETAILS, LOGOUT, SUCCESS} from '../Actions/Actions';

export const initialState = {
  loginUserData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USER_DETAILS}_${SUCCESS}`: {
      return {loginUserData: action.payload};
    }
    case `${LOGOUT}_${SUCCESS}`: {
      return {loginUserData: {}};
    }
    default:
      return state;
  }
};
