import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

const FIELDS = {
  email: { label: "Email: ", type: 'input'},
  password: { label: "Password ", type: 'input'}
}

class SignIn extends Component{
  handleFormSubmit({email,password}){
      this.props.signinUser({email,password});
  }

  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  render(){
    const { handleSubmit, fields: {email,password}} = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} type="text" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} type="password" className="form-control"/>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state){
  return {errorMessage: state.auth.error}
}

export default reduxForm({
  form: "signin",
  fields: ['email','password']
  },mapStateToProps, actions)(SignIn);
