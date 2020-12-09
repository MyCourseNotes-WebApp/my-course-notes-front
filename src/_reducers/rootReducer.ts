import { CombinedState, combineReducers } from "redux";
import { Reducer } from "redux";
import { IUserState, userReducer } from "./userReducer/userReducer";

export interface IRootState {
    userState:IUserState
}

export const rootReducer:Reducer<CombinedState<IRootState>> = combineReducers<IRootState>(
    {
        userState: userReducer
    }
);