import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';


class Signup extends Component{
  render(){
    const { handleSubmit ,fields: {email,password,passwordConfirm}} = this.props;
    return(
      <form action="">
        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <input  className="form-control" {...email}/>
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="">Password:</label>
          <input type="password" className="form-control" {...password}/>
          {
          // What is saying is: if touched evalute to true && error evaluate to true and
          // last statement evaluates to true, then return the last evaluation
          }
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="">Confirm Password:</label>
          <input type="password" className="form-control" {...passwordConfirm}/>
        </fieldset>
        <button type="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function validate(formProps){
  const errors={};
  if(formProps.password != formProps.passwordConfirm){
    errors.password = "Password must match";
  }
  if(!formProps.email){
    errors.email = "Email must be supplied";
  }
  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email','password','passwordConfirm'],
  validate
})(Signup);
