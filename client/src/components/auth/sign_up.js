import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';


class Signup extends Component{
  handleFormSubmit(formProps){
      // call action creator to signup user!
      // handleSubmit helper is intelling and if it contains any error it won't be submitted
      this.props.signupUser(formProps);
  }
  renderAlert(){

    if (this.props.errorMessage){
     console.log(this.props.errorMessage);
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong>{this.props.errorMessage}
        </div>
       );
    }
  }
  render(){
    const { handleSubmit ,fields: {email,password,passwordConfirm}} = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}action="">
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
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function validate(formProps){
  const errors={};
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(formProps.password != formProps.passwordConfirm){
    errors.password = "Password must match";
  }

  if(!formProps.email || !regexEmail.test(formProps.email)){
    errors.email = "Please insert a valid email";
  }
  if(!formProps.password){
    errors.password = "Please insert a password";
  }
  if(!formProps.passwordConfirm){
    errors.passwordConfirm = "Please insert again the password";
  }
  return errors;
}

function mapStateToProps(state){
  return {errorMessage: state.auth.error};
}

export default reduxForm({
  form: 'signup',
  fields: ['email','password','passwordConfirm'],
  validate
},mapStateToProps,actions)(Signup);
