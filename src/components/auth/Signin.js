import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'


class Signin extends Component {
  state = {
   email: '',
   password: '',
  }

  handleChange = (e) =>{
   this.setState({
     [e.target.id]: e.target.value
   })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.signIn(this.state)
   }
  render() {
    const {authError, auth} = this.props;
    if(auth.uid) return <Redirect to='/'/>
    return (
     <div className="signinform">
       <div>
     <div className="ui attached message">
  <div className="header">
    Welcome to Photobooth
  </div>
  <p>Fill out the form below to sign-in for a new account</p>
</div>
<form onSubmit={this.handleSubmit} className="ui form attached fluid segment">
  <div className="field">
    <label>Email</label>
    <input onChange={this.handleChange} type="email" id='email' name="email" placeholder="Email"/>
  </div>
  <div className="field">
    <label>Password</label>
    <input  onChange={this.handleChange} type="password" id='password' placeholder="Password"/>
  </div>
  
  <button className="ui blue submit button">Submit</button>
  {authError ? <p>{authError}</p> : null}
</form>
<div className="ui bottom attached warning message">
  <i className="icon help"></i>
  Dont have an account? <Link to='/signup'>Register here</Link> instead.
</div>
</div>
</div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
