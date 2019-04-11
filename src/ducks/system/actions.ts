import * as types from './constants';

// Subscribe to auth state channel
export const authStatusChannelSubscribe = () => ({
  type: types.STATUS_CHANNEL_SUBSCRIBE_REQUEST,
});

// Unsubscribe from auth state channel
export const authStatusChannelUnsubscribe = () => ({
  type: types.STATUS_CHANNEL_UNSUBSCRIBE_REQUEST,
});

// Sign in with email / password
interface SignInValues {
  email: string;
  password: string;
}

interface IsignIn {
  type: typeof types.SIGN_IN_REQUEST;
  payload: SignInValues;
}

export const signIn = (values: SignInValues) => ({
  type: types.SIGN_IN_REQUEST,
  payload: values,
});

// Sign out
export const signOut = () => ({
  type: types.SIGN_OUT_REQUEST,
});

// Sign in with Pop up (facebook | google)
interface IsignInPopUp {
  type: typeof types.SIGN_IN_POPUP_REQUEST;
  payload: SignInValues;
}

export const signInPopUp = (provider: string) => ({
  type: types.SIGN_IN_POPUP_REQUEST,
  payload: provider,
});
