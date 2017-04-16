import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';

export function signinUser({email,password}){
    return function(dispatch){
      // submitting the request
      // {email: email, password: password}
      axios.post(`${ROOT_URL}/signin`, {email,password})
        .then(res=>{
        // if request is good...
        // -Update state to indicate user is auth
        // save the JWT token
        // redirect to the route '/feature'

        })

        .catch(()=>{
        // If request is bad...
        // -Show an error to the user

        });
    }
}
