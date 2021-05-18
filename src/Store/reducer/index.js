import { combineReducers } from 'redux';
import authenticateUser from './auth';
import Appointments from './appointment';

export default combineReducers({
    authenticateUser: authenticateUser,
    appointment: Appointments
});