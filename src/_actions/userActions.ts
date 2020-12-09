import { IUserState } from "src/_reducers/userReducer/userReducer";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const signIn = (userData:IUserState) => ({
    type: SIGN_IN,
    payload: userData
});

export const signOut = () => ({
    type: SIGN_OUT
});