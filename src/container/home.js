import React from 'react';
import { useSelector } from 'react-redux';
import SuperAdmin from './superAdmin';
import UserAppointment from './userAppointment';


const Home = () => {
    const user = useSelector(({ authenticateUser }) => { return authenticateUser.authenticateUser });
    return (
        <React.Fragment>
                    <UserAppointment />
        </React.Fragment>
    );
}

export default Home;