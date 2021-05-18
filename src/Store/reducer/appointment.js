import { USER_APPOINTMENT_DATA, DELETE_USER_APPOINTMENT, EDIT_USER_APPOINTMENT, UPDATE_USER_APPOINTMENT, EDIT_USER_APPOINTMENT1, EDIT_USER_APPOINTMENT2, LOG_OUT } from '../constant/Actiontypes';
const INIT_STATE = {
    userappointments: [],
    check: false,
    docId: null,
    id: null,
}
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case USER_APPOINTMENT_DATA:
            let cloneAppointmentArray = state.userappointments.slice(0);
            cloneAppointmentArray.push(action.payload);
            return {
                ...state,
                userappointments: cloneAppointmentArray
            }
        case DELETE_USER_APPOINTMENT:
            let cloneAppointmentArray1 = state.userappointments.slice(0);
            cloneAppointmentArray1.splice(action.payload, 1);
            return {
                ...state,
                userappointments: cloneAppointmentArray1
            }
        case EDIT_USER_APPOINTMENT:
            return {
                ...state,
                check: action.payload,
            }
        case EDIT_USER_APPOINTMENT1:
            return {
                ...state,
                docId: action.payload,
            }
        case EDIT_USER_APPOINTMENT2:
            return {
                ...state,
                id: action.payload,
            }
        case UPDATE_USER_APPOINTMENT:
            let cloneArray2 = state.userappointments.slice(0);
            let name = cloneArray2[state.id].name;
            let email = cloneArray2[state.id].email;
            let mobNum = cloneArray2[state.id].mobNum;
            let time = action.payload.time;
            let date = action.payload.date;
            let obj = {
                name,
                email,
                mobNum,
                time,
                date
            }
            cloneArray2.splice(state.id, 1, obj);
            return {
                ...state,
                userappointments: cloneArray2,
                id: null,
                docId: null,
                check: false
            }
        case LOG_OUT:
            let cloneArray3 = state.userappointments.slice(0);
            cloneArray3.splice(0);
            return {
                ...state,
                userappointments: cloneArray3
            }
        default:
            return state;
    }
}