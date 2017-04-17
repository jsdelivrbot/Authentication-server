import {AUTH_USER,UNAUTH_USER} from './types';
import axios from 'axios';
import {browserHistory} from 'react-router';
const ROOT_URL = 'http://localhost:3090';
export function signinUser({email,password}){
    return function(dispatch){
      // submitting the request
      // {email: email, password: password}
      axios.post(`${ROOT_URL}/signin`, {email,password})
        // The then will entry just in case that the user exists, because we prepared the server
        // to respond with a fail
        .then(res=>{
        // if request is good...
        // -Update state to indicate user is auth

          dispatch({type: AUTH_USER});
        // save the JWT token
        // localStorage is like the updrage of the cookies. Isthe same behaviour

         localStorage.setItem('token', res.data.token);


        // redirect to the route '/feature' -> Thanks to the browserHistory
          browserHistory.push('/feature');
        })

        .catch(()=>{
        // If request is bad...
        // -Show an error to the user

        });
    }
}
