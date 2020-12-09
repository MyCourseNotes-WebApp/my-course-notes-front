import { SIGN_IN, SIGN_OUT } from "../../_actions/userActions";

export interface IBasicNotebook{
    title:string;
    startDate:string;
    editedDate:string;
}

export interface IUserState{
    username:string;
    email:string;
    notebooks:IBasicNotebook[];
}

const initialState:IUserState = {username:"", email: "", notebooks:[] as IBasicNotebook[]};

export const userReducer = (state:IUserState = initialState, action:{type:string, payload:IUserState}):IUserState => {
    console.log("calling user reducer...");

    switch(action.type){
        case SIGN_IN:
            if(action.payload.username)
                return { ... action.payload };
            else
                return { ... initialState };
        case SIGN_OUT:
            return { ... initialState };
        default:
            return state;
    }
}