import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {signUpUser} from '../Store/action/auth';
import { Spinner } from 'reactstrap';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
const Signup = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [visible,setVisible] = useState(false);
    const userRegistered=()=>{
        console.log('Sign up');
        setVisible(true);
        if(name !== '' && email !== '' && password !== ''){
            dispatch(signUpUser(email,password,name,setVisible,history));
        }
        else{
            setVisible(false);
            toast.error("Please Fill The Empty Field First !", {
                position: toast.POSITION.TOP_RIGHT
              });
        }
        setEmail('');
        setPassword('');
        setName('');
    }
    return ( 
        <React.Fragment>
            <div className="container-fluid bg-wrapper extra-height">
            <div className="container" style={{maxWidth:'1500px !important'}}>
                 <div className="row w-100">
                     <div className="col-md-12">
                         <div className="row">
                             <div className='col-lg-2'></div>
                             <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-2 col-xl-2 make-center">
                                <h4 className="font-30 font-600 color-white make-after">Food Delivery & Takeout</h4>
                                <p className='font-15 color-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                             </div>
                             <div className='col-lg-3'></div>
                             <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5">
                               <div className='box-area row'>
                                   <div className='container-fluid'>
                                       <div className='col-md-12'>
                                           <h4 className="font-30 text-center font-700 color-green">Sign Up</h4>
                                       
                                       <form>
                                           <div className='row'>
                                               <div className='col-md-12'>
                                                    <div class="mb-3">
                                                        <label for="exampleInputEmail1" className="form-label font-12 font-700">Full Name</label>
                                                        <input type="text" name="name" value={name} onChange={(event)=>{setName(event.target.value)}} placeholder="Enter Your Name Here..." className="form-control" />
                                                    </div>
                                               </div>
                                               <div className='col-md-12'>
                                                    <div className="mb-3">
                                                        <label for="exampleInputEmail" className="form-label font-12 font-700">Email</label>
                                                        <input type="text" name="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder="Enter Your Email Here..." className="form-control" />
                                                    </div>
                                               </div>
                                            
                                               <div className="col-md-12">
                                                    <div className="mb-3">
                                                    <label for="exampleInputPassword1" className="form-label font-13 font-700">Password</label>
                                                    <input type="password" name="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder="Enter Your Password Here..." className="form-control" />
                                                    </div>
                                               </div>
                                           </div>
                                            
                                             
                                             <button type="button" onClick={userRegistered} className="btn btn-primary w-100 font-14 font-700">{visible ? <Spinner color="light" /> : 'Sign Up'}</button>
                                             <p className="text-center font-12 mt-2 font-600">By continuing you agree to accept our Privacy Policy & Terms Of Service
                                              <br />
                                              <span className="text-warning text-center font-12 font-600"><Link to="/">Already have an account? Login</Link></span>
                                             </p>
                                         </form>
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
 
export default Signup;