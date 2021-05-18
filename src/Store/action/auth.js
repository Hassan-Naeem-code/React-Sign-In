// import { SIGNUP_USER } from '../constant/Actiontypes';
import firebase from 'firebase';
import { SIGNUP_USER ,LOG_OUT,CHECK_USER} from '../constant/Actiontypes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




//FIREBASE CONFIGURATION HERE

var firebaseConfig = {
    apiKey: "AIzaSyDAeFxHNOUdSFqDEVg9PNEZkw4NsF6_EkI",
    authDomain: "react-appointment-app-c9753.firebaseapp.com",
    databaseURL: "https://react-appointment-app-c9753.firebaseio.com",
    projectId: "react-appointment-app-c9753",
    storageBucket: "react-appointment-app-c9753.appspot.com",
    messagingSenderId: "63783713103",
    appId: "1:63783713103:web:007088b651d2e638a9ed3a",
    measurementId: "G-Q97YGQKW6P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


let uid;


//Firebase signup


export function signUpUser(email, password, name,setVisible,history) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (success) {
                console.log(success, 'Success');
                uid = success.user.uid;

                //Saving data in firebase database....
                firebase.firestore().collection("users").add({
                    name: name,
                    email: email,
                    uid: uid
                })
                    .then(function (docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        let userObj = {
                            name,
                            email,uid
                        }
                        dispatch({
                            type:SIGNUP_USER,
                            payload: userObj
                        })
                        // alert('You have Sign Up Successfully....');
                        setVisible(false);
                        toast.success("SignUp Successfull!", {
                            position: toast.POSITION.TOP_RIGHT
                          });
                          history.push("/");
                    })
                    .catch(function (error) {
                        console.error("Error adding document: ", error);
                        setVisible(false);
                        toast.error("Something Went Wrong !", {
                            position: toast.POSITION.TOP_RIGHT
                          });
                    });
            })
            .catch(function (error) {
                console.error(error);
                setVisible(false);
            });
    }
}

// Firebase Login

export function loginUser(email,password,setVisible){
    return dispatch=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(success){
         console.log('Success',success);
        //  alert('You Have Loged In SuccessFully...');
        setVisible(false);
        toast.success("Login Successfull!", {
            position: toast.POSITION.TOP_RIGHT
          });
    
        })
        .catch(function(error) {
            // Handle Errors here.
            console.error('Error',error);
            setVisible(false);
            toast.error("Something Went Wrong !", {
                position: toast.POSITION.TOP_RIGHT
              });
          });
    }
}

export function applygoogleSignin(history){
    return dispatch=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('user',user);
    console.log('user',user.displayName);
    firebase.firestore().collection("users").add({
        name: user.displayName,
        email: user.email,
        uid: user.uid
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            let userObj = {
                name : user.displayName,
                email : user.email,uid : user.uid
            }
            dispatch({
                type:SIGNUP_USER,
                payload: userObj
            })
            toast.success("Sign In Successfull!", {
                position: toast.POSITION.TOP_RIGHT
              });
              history.push("/");
            })
            console.log('user',user);
    // ...
  }).catch((error) => {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

    }
}
export function fetchUserData(uid){
    return async dispatch=>{
    let userFound = await firebase.firestore().collection('users').where('uid','==',uid).get();
    userFound.forEach((doc) => {
        console.log(doc.id,'=>',doc.data());
        dispatch({
            type: CHECK_USER,
            payload:doc.data()
        })
    })
    }
}


export function signOut(){
    return dispatch=>{
        firebase.auth().signOut()
        .then(()=>{
            dispatch({
                type: LOG_OUT
            });
            // alert('LogOut Successfully...');
            toast.success("LogOut Successfull!", {
                position: toast.POSITION.TOP_RIGHT
              });
        })
        .catch((error)=>{
            console.error('Error',error);
            toast.error("Something Went Wrong!", {
                position: toast.POSITION.TOP_RIGHT
              });
        })
    }
}