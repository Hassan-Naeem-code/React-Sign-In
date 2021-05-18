import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUserAppointment, signOut } from '../Store/action/appointment';

const SuperAdmin = () => {
    const getState = useSelector(({ appointment }) => { return appointment.userappointments });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllUserAppointment());
    }, []);
    const logOutUser = () => {
        dispatch(signOut());
    }
    return (
        <React.Fragment>
            <h1>Super Admin Page</h1>
            <table>
                <thead>
                    <tr>
                        <th> NAME</th>
                        <th>EMAIL ADDRESS</th>
                        <th>MOBILE ADDRESS</th>
                        <th>DATE</th>
                        <th>TIME</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        getState.map((items, index) => {
                            return (
                                <tr key={index}>
                                    <td>{items.name}</td>
                                    <td>{items.email}</td>
                                    <td>{items.mobNum}</td>
                                    <td>{items.date}</td>
                                    <td>{items.time}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button type="button" onClick={logOutUser}>LOG OUT</button>
        </React.Fragment>
    );
}

export default SuperAdmin;