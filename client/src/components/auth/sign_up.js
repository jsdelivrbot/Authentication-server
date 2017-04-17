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
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="">Password:</label>
          <input type="password" className="form-control" {...password}/>
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

export default reduxForm({
  form: 'signup',
  fields: ['email','password','passwordConfirm']
})(Signup);