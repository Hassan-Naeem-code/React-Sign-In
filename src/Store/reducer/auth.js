import { SIGNUP_USER,LOG_OUT,CHECK_USER } from '../constant/Actiontypes';

const INIT_STATE = {
    authenticateUser: null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            // let cloneAuthenticateUser = state.authenticateUser;
            // cloneAuthenticateUser.push(action.payload);
            return {
                ...state,
                authenticateUser: action.payload,
            }
        case CHECK_USER:
            // let cloneArr = state.authenticateUser;
            // cloneArr.push(action.payload);
            return{
                ...state,
                authenticateUser: action.payload
            }
        case LOG_OUT:
            // let cloneArrayOfAuthenticateUser = state.authenticateUser.slice(0);
            // cloneArrayOfAuthenticateUser.slice(0);
            return{
                ...state,
                authenticateUser: null
            }
        default:
            return state
    }
}