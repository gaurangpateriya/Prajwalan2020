import {
  APP_LOAD,
  REDIRECT,
} from '../constants/actionTypes';

export const defaultState = {
  appName: 'Prajwalan2020',
  token: null,
  viewChangeCounter: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
      };
    case REDIRECT:
      return { ...state, redirectTo: action.payload };
    default:
      return state;
  }
};
