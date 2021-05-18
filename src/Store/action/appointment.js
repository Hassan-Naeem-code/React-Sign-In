import firebase from 'firebase';
import { USER_APPOINTMENT_DATA, DELETE_USER_APPOINTMENT, EDIT_USER_APPOINTMENT, UPDATE_USER_APPOINTMENT, EDIT_USER_APPOINTMENT1, EDIT_USER_APPOINTMENT2, LOG_OUT } from '../constant/Actiontypes';

export function enterUserAppointmentData(appointmentData) {
    return async dispatch => {
        await firebase.firestore().collection('appointments').add(appointmentData);
        alert('USER DATA IS ENTERED IN DATABASE SUCCESSFULLY.....');
    }
}

export function signOut() {
    return dispatch => {
        firebase.auth().signOut()
            .then(() => {
                dispatch({
                    type: LOG_OUT
                });
                alert('LogOut Successfully...');
            })
            .catch((error) => {
                console.error('Error', error);
            })
    }
}

export function fetchAllUserAppointment() {
    return async dispatch => {
        firebase.firestore().collection('appointments').orderBy('date','asc').orderBy('time','asc')
            .onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    if (change.type === "added") {
                        let appointments = change.doc.data();
                        appointments.docId = change.doc.id;
                        console.log("Appointments: ", appointments);
                        dispatch({ type: USER_APPOINTMENT_DATA, payload: appointments })

                    }
                    // if (change.type === "modified") {
                    //     console.log("Modified city: ", change.doc.data());
                    // }
                    // if (change.type === "removed") {
                    //     console.log("Removed city: ", change.doc.data());
                    // }
                    console.log('DATA', change.doc.data());
                });
            });

    }
}


export function fetchCurrentUserAppointment(uid) {
    return async dispatch => {
        firebase.firestore().collection('appointments').where('uid', '==', uid)
            .onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                    if (change.type === "added") {
                        let appointments = change.doc.data();
                        appointments.docId = change.doc.id;
                        console.log("Appointments: ", appointments);
                        dispatch({ type: USER_APPOINTMENT_DATA, payload: appointments })

                    }
                    console.log('DATA', change.doc.data());
                });
            });

    }
}

export function deleteCurrentAppointment(docId, index) {
    return async dispatch => {
        firebase.firestore().collection("appointments").doc(docId).delete()
            .then(function () {
                dispatch({ type: DELETE_USER_APPOINTMENT, payload: index })
                console.log("Document successfully deleted!");
                alert('Deleted Successfully...');
            })
            .catch(function (error) {
                console.error("Error removing document: ", error);
                alert('UnSuccessfully Denied Not Deleted...');
            });
    }
}

export function editUserAppointment() {
    return dispatch => {
        dispatch({
            type: EDIT_USER_APPOINTMENT,
            payload: true,
        })
    }
}
export function editUserAppointment1(docId) {
    return dispatch => {
        dispatch({
            type: EDIT_USER_APPOINTMENT1,
            payload: docId,
        })
    }
}
export function editUserAppointment2(id) {
    return dispatch => {
        dispatch({
            type: EDIT_USER_APPOINTMENT2,
            payload: id,
        })
    }
}

export function updateUserAppointment(docId, time, date) {
    return async dispatch => {
        let obj = {
            time, date
        }
        firebase.firestore().collection('appointments').doc(docId).update({
            time, date
        })
            .then(function (success) {
                dispatch({
                    type: UPDATE_USER_APPOINTMENT,
                    payload: obj
                })
                console.log('Document Updated Successfully', success);
                alert('Document Updated Successfully....');
            })
            .catch(function (error) {
                console.error('Error is: ', error)
            })
    }
}