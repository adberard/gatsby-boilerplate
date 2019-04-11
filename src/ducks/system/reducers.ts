import * as types from './constants';
import { UserInfo } from 'firebase/app';

const initialState = {
  loggedIn: false,
  userName: null,
  firebaseUserInfo: null,
};

export interface ISystem {
  loggedIn: boolean;
  userName: string;
  firebaseUserInfo: UserInfo;
}

export function systemReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.STATUS_UPDATE:
      return {
        ...state,
        loggedIn: !!action.payload,
        firebaseUserInfo: action.payload,
      };
    case types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
