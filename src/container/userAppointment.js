import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../Store/action/auth';
import { enterUserAppointmentData, fetchCurrentUserAppointment, updateUserAppointment } from '../Store/action/appointment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown,faHome,faUtensils,faListUl,faWallet,faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserAppointment = () => {
    const dispatch = useDispatch();
    const getState = useSelector(({ authenticateUser }) => { return authenticateUser.authenticateUser });
    const getAppointment = useSelector(({ appointment }) => { return appointment })
    useEffect(() => {
        dispatch(fetchCurrentUserAppointment(getState.uid));
        console.log('DATA FOR USAGE EDIT', getAppointment);
        // document.getElementById("tergetEL").disabled = true;
    }, []);
    const [name, setName] = useState(getState.name);
    const [email, setEmail] = useState(getState.email);
    const [mobNum, setMobNum] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('')
    const logOutUser = () => {
        dispatch(signOut());
    }
    const bookAppointment = () => {
        let userData = {
            name, email, mobNum, time, date, uid: getState.uid
        }
        let today = new Date();
        var appointmentDate = new Date(userData.date);
        today = today.getTime();
        appointmentDate = appointmentDate.getTime();

        if (appointmentDate > today) {
            dispatch(enterUserAppointmentData(userData));
            setName('');
            setEmail('');
            setMobNum('');
            setTime('');
            setDate('');
        }

        else if (userData.name === "" || userData.mobNum === "" || userData.email === "") {
            alert("Bhai kia kr rahy ho ?");
        }

        else {
            console.log("Bhai khayal kro!");
        }
    }
    const updateAppointment = () => {
        dispatch(updateUserAppointment(getAppointment.docId, time, date));
        setTime('');
        setDate('');
    }
    return (
        <React.Fragment>
            <div className="bg-steps">
                <section className="container-fluid px-4">
                    <div className="row">
                        
                        <div className="col-md-2 d-md-block d-none">
                            <div className="paymentstep-section">
                                <div className="payment-step">
                                    <a href="/" title="Logoverge">
                                        {/* <img src="img/logo.svg" alt="Logoverge" className="img-fluid"> */}
                                    </a>
                                    <nav className="position-relative" style={{top:"4%"}}>
                                        <ul className="list-unstyled position-relative">
                                            <li className="position-relative active text-center">
                                                {/* <a href="create-logo-step-1">
                                                    <span className="font-poppins position-absolute font-weight-bold">01</span>
                                                    <h6 className="font-poppins ">STEP 01</h6>
                                                    <h4 className="font-poppins font-weight-semibold">Business Name</h4>
                                                </a> */}
                                                <a href="/DashBoard"><FontAwesomeIcon icon={faHome} className="font-30" />
                                                <h1 className="font-17 color-white">Home</h1>
                                                </a>
                                            </li>
                                            <li className="position-relative text-center">
                                                {/* <a href="create-logo-step-2">
                                                    <span className="font-poppins position-absolute font-weight-bold">02</span>
                                                    <h6 className="font-poppins ">STEP 02</h6>
                                                    <h4 className="font-poppins font-weight-semibold">Business Slogan</h4>
                                                </a> */}
                                                <a href="/DashboardOrders">
                                                <FontAwesomeIcon icon={faUtensils} className="font-30" />
                                                <h1 className="font-17 color-white">Orders</h1>
                                                </a>
                                            </li>
                                            <li className="position-relative text-center">
                                                {/* <a href="create-logo-step-3">
                                                    <span className="font-poppins position-absolute font-weight-bold">03</span>
                                                    <h6 className="font-poppins ">STEP 03</h6>
                                                    <h4 className="font-poppins font-weight-semibold">Business Industry</h4>
                                                </a>
                                                 */}
                                                  <FontAwesomeIcon icon={faListUl} className="font-30 color-black" />
                                                <h1 className="font-17 color-white">YOUR <br />MENU</h1>
                                            </li>
                                            <li className="position-relative text-center">
                                                {/* <a href="javascript:;">
                                                    <span className="font-poppins position-absolute font-weight-bold">04</span>
                                                    <h6 className="font-poppins ">STEP 04</h6>
                                                    <h4 className="font-poppins font-weight-semibold">About You</h4>
                                                </a> */}
                                                <a href="/DashboardFinance">
                                                 <FontAwesomeIcon icon={faWallet} className="font-30" />
                                                <h1 className="font-17 color-white">FINANCE</h1>
                                                </a>
                                            </li>
                                            <li className="position-relative text-center">
                                                {/* <a href="javascript:;">
                                                    <span className="font-poppins position-absolute font-weight-bold">05</span>
                                                    <h6 className="font-poppins ">STEP 05</h6>
                                                    <h4 className="font-poppins font-weight-semibold">Your Logos</h4>
                                                </a> */}
                                                 <FontAwesomeIcon icon={faHome} className="font-30" />
                                                <h1 className="font-17 color-white">STORE <br />SETUP</h1>
                                            </li>
                                            <li className="position-relative text-center">
                                                {/* <a href="javascript:;">
                                                    <span className="font-poppins position-absolute font-weight-bold">05</span>
                                                    <h6 className="font-poppins ">STEP 05</h6>
                                                    <h4 className="font-poppins font-weight-semibold">Your Logos</h4>
                                                </a> */}
                                                 <FontAwesomeIcon icon={faSignInAlt} className="font-30 pointer" />
                                                <h1 className="font-17 color-white pointer" onClick={logOutUser}>LOGOUT</h1>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 mb-5 mt-5">
                           <div className="row">
                              <div className="col-md-12">
                                  <h4 className="font-20 color-orange">DASHBOARD</h4>
                                  <h4 className="font-17 color-gray">Welcome To Home {getState.name}, have a nice day at work</h4>
                              </div>
                              <div className="col-md-12 mt-3">
                                  <div className="bg-251 border-rad-25 p-4">
                                      <div className="row">
                                          <div className="col-md-12">
                                              <div className="row">
                                                  <div className="col-md-8">
                                                      <div className="row">
                                                          <div className="col-md-12">
                                                              <h4 className="font-22 font-600">NEW ORDERS</h4>
                                                              <h4 className="font-17 color-gray font-500 mb-3">01/01/2021 12:12:12 pm</h4>
                                                              <button className="btn btn-secondary border-rad-25 font-15 color-white pl-25 pr-25 font-600">Print</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-4 make-center">
                                                      <div className="row">
                                                          <div className="col-md-12">
                                                              <h4 className="font-25 font-700 color-orange">4499</h4>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-12 mt-3">
                                  <div className="row">
                                      <div className="col-md-4">
                                        <div className="bg-251 border-rad-25 p-4">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                              <div className="row">
                                                 <div className="col-md-12">
                                                     <h4 className="font-16 color-orange">ACTIVE ORDERS</h4>
                                                     <h4 className="font-25 font-700 mt-3">4499</h4>
                                                     <h4 className="font-14 color-gray mt-3">01/01/2021</h4>
                                                     <h4 className="font-14 color-gray mt-3 mb-3">12:12:12pm</h4>
                                                     <button className="btn btn-secondary border-rad-25 font-15 color-white pl-25 pr-25 mt-1 font-600 mt-2">Print</button>
                                                     <br />
                                                     <button className="btn btn-md bg-color-dark-gray border-rad-25 font-15 color-white pl-25 pr-25 mt-1 font-600 mt-2">Details</button>
                                                 </div>
                                              </div>
                                          </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                      <div className="bg-251 border-rad-25 p-4">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                              <div className="row">
                                                 <div className="col-md-12">
                                                     <h4 className="font-16 color-orange">ACTIVE ORDERS</h4>
                                                     <h4 className="font-25 font-700 mt-3">4499</h4>
                                                     <h4 className="font-14 color-gray mt-3">01/01/2021</h4>
                                                     <h4 className="font-14 color-gray mt-3 mb-3">12:12:12pm</h4>
                                                     <button className="btn btn-secondary border-rad-25 font-15 color-white pl-25 pr-25 mt-1 font-600 mt-2">Print</button>
                                                     <br />
                                                     <button className="btn btn-md bg-color-dark-gray border-rad-25 font-15 color-white pl-25 pr-25 mt-1 font-600 mt-2">Details</button>
                                                 </div>
                                              </div>
                                          </div>
                                            </div>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                      <div className="bg-251 border-rad-25 p-4">
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                              <div className="row">
                                                 <div className="col-md-12">
                                                     <h4 className="font-16 color-orange">ACTIVE ORDERS</h4>
                                                     <h4 className="font-25 font-700 mt-3">4499</h4>
                                                     <h4 className="font-14 color-gray mt-3">01/01/2021</h4>
                                                     <h4 className="font-14 color-gray mt-3 mb-3">12:12:12pm</h4>
                                                     <button className="btn btn-secondary border-rad-25 font-15 color-white pl-25 pr-25 mt-1 font-600 mt-2">Print</button>
                                                     <br />
                                                     <button className="btn btn-md bg-color-dark-gray border-rad-25 font-15 color-white pl-25 pr-25 mt-1 font-600 mt-2">Details</button>
                                                 </div>
                                              </div>
                                          </div>
                                            </div>
                                        </div>
                                      </div>
                                  </div>
                              </div>
                           </div>       
                        </div>
                        <div className="col-md-3 d-md-block d-none">
                            <div className="paymentstep-section-second">
                                <div className="payment-step w-50 text-center">
                                    <a href="/" title="Logoverge">
                                        {/* <img src="img/logo.svg" alt="Logoverge" className="img-fluid"> */}
                                        <h4 className="font-20 color-orange mt-4 mb-3">SUMMARY</h4>
                                        <h4 className="font-17 color-gray">Yesterday <FontAwesomeIcon icon={faChevronDown} className="font-17 color-orange" /></h4>
                                    </a>
                                    <nav className="position-relative">
                                        <ul className="list-unstyled position-relative">
                                            <li className="position-relative new-bg text-center p-4 border-rad-25" style={{border:'1px solid lightgray'}}>
                                                <h1 className="font-19">ORDERS</h1>
                                                <h1 className="font-22 font-700 color-orange">$100</h1>
                                            </li>
                                            <li className="position-relative new-bg text-center p-4 border-rad-25" style={{border:'1px solid lightgray'}}>
                                                <h1 className="font-19">EARNINGS</h1>
                                                <h1 className="font-22 font-700 color-orange">$100</h1>
                                            </li>
                                            <li className="position-relative new-bg text-center p-4 border-rad-25" style={{border:'1px solid lightgray'}}>
                                                <h1 className="font-19">POPULAR</h1>
                                                <h1 className="font-16">Alfredo Pasta</h1>
                                                <h1 className="font-22 font-700 color-orange">$100</h1>
                                            </li>
                                            <li className="position-relative new-bg text-center p-4 border-rad-25" style={{border:'1px solid lightgray'}}>
                                                <h1 className="font-19">LEAST SOLD</h1>
                                                <h1 className="font-16">Chilli Dry</h1>
                                                <h1 className="font-22 font-700 color-orange">$100</h1>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ToastContainer autoClose={2000} />
        </React.Fragment>
    );
}
export default UserAppointment;