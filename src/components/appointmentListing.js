import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCurrentAppointment, editUserAppointment, editUserAppointment1, editUserAppointment2 } from '../Store/action/appointment';
const AppointmentListing = () => {
    const getState = useSelector(({ appointment }) => { return appointment.userappointments });
    const dispatch = useDispatch();
    // console.log(getState, 'DATA');
    const deleteData = (event) => {
        const { id, title } = event.target;
        dispatch(deleteCurrentAppointment(id, title));
    }
    const editData = (event) => {
        const { id, title } = event.target;
        console.log('Id', id);
        console.log('Title', title);
        dispatch(editUserAppointment());
        dispatch(editUserAppointment1(id));
        dispatch(editUserAppointment2(title));
    }
    const myFunction = () => {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    const myFunction1 = () => {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput1");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[4];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    return (
        <React.Fragment>
            <input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search By Date..."></input>
            <input type="text" id="myInput1" onKeyUp={myFunction1} placeholder="Search By Time..."></input>
            <table id="myTable">
                <thead>
                    <tr className="header">
                        <th>NAME</th>
                        <th>EMAIL ADDRESS</th>
                        <th>MOBILE NUMBER</th>
                        <th>DATE</th>
                        <th>TIME</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getState.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobNum}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <td><button type="button" id={item.docId} title={index} onClick={editData} name={item.name}>EDIT</button></td>
                                    <td><button type="button" id={item.docId} title={index} onClick={deleteData}>DELETE</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default AppointmentListing;