import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,applygoogleSignin } from '../Store/action/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare,faGoogle} from '@fortawesome/free-brands-svg-icons';
import { Spinner } from 'reactstrap';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';

const Login = () => {
    let history = useHistory();
    const getState = useSelector(({ authenticateUser }) => { return authenticateUser.authenticateUser });
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible,setVisible] = useState(false);
    console.log(getState);
    const login = () => {
        console.log('Click');
        setVisible(true);
        if(email !== '' && password !== ''){
            dispatch(loginUser(email, password,setVisible));
        }
        else{
            setVisible(false);
toast.error("Please Fill The Empty Field First !", {
    position: toast.POSITION.TOP_RIGHT
  });
        }
        setEmail('');
        setPassword('');
    }
    const googleSignin =()=>{
        dispatch(applygoogleSignin(history));
    }
    const componentClicked = () =>{
        console.log('click')
    }
    const responseFacebook = () =>{
        console.log('response')
    }
    return (
        <React.Fragment>
            <div className="container-fluid bg-wrapper">
               <div className="container" style={{maxWidth:'1500px !important'}}>
                    <div className="row w-100">
                        <div className="col-md-12">
                            <div className="row">
                                <div className='col-lg-2'></div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 make-center">
                                   <h4 className="font-30 font-600 color-white make-after">Food Delivery & Takeout</h4>
                                   <p className='font-15 color-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <div className='col-lg-4'></div>
                                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                  <div className='box-area row'>
                                      <div className='container-fluid'>
                                          <div className='col-md-12 text-center'>
                                              <h4 className="font-30 font-700 color-green">Login</h4>
                                          </div>
                                          <div className='col-md-12 position-relative'>
                                          <form>
                                                <div className="mb-3">
                                                    <label for="exampleInputEmail1" className="form-label font-13 font-700">Email Address</label>
                                                    <input  type="text" name="email" className='form-control font-13' placeholder="Enter Your Email Here..." value={email} onChange={(event) => { setEmail(event.target.value) }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleInputPassword1" className="form-label font-13 font-700">Password</label>
                                                    <input type="password" name="password" className='form-control font-13' placeholder="Enter Your Password Here..." value={password} onChange={(event) => { setPassword(event.target.value) }} />
                                                </div>
                                                <button type="button" className="btn btn-primary w-100" onClick={login}>{visible ? <Spinner color="light" /> : 'Submit'}</button>
                                                <p className="text-danger text-right font-15 font-600"><Link to="/signup">Create An Account</Link></p>
                                            </form>
                                            <hr />
                                            <span className='make-center-abs'>OR</span>
                                          </div>
                                          <div className='row'>
                                               <div className='col-md-12 text-center'> 
                                               <button className='btn btn-primary w-100' onClick={googleSignin}><FontAwesomeIcon icon={faGoogle} className="font-18 mx-2" />Login With Google</button>
                                                    <FacebookLogin className="w-100"
    appId="510426036645808"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
                                                </div>
                                           </div>
                                      </div>
                                  </div>
                                </div>
                                {/* <div className="col-md-1">
                                
                                </div> */}
                            </div>
                        </div>
                    </div>
               </div>
           </div>
           <ToastContainer autoClose={2000} />
        </React.Fragment>
    );
}

export default Login;