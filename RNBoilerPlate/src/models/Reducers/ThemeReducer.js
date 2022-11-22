import {SUCCESS, TOGGLE_THEME} from '../Actions/Actions';

export const initialState = {
  isDark: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${TOGGLE_THEME}_${SUCCESS}`:
      return action.payload;
    default:
      return state;
  }
};
