import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'
import {Link} from 'react-router-dom'

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    userphoto: '',
   }
   uploadfile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'userphoto');

    const res = await fetch('https://api.cloudinary.com/v1_1/dedfrilse/image/upload', {
      method: 'POST',
      body: data
    });

    const file = await res.json();
    console.log(file);
    this.setState({
      userphoto: file.secure_url,
    });

  }
 
   handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
   }
 
   handleSubmit = (e) =>{
     e.preventDefault();
     this.props.signUp(this.state);
    }
  render() {
    const {auth, authError} = this.props;
    if(auth.uid) return <Redirect to='/'/>
    return (
     <div className="signinform">
       <div>
     <div className="ui attached message">
  <div className="header">
    Welcome to our site!
  </div>
  <p>Fill out the form below to sign-up for a new account</p>
</div>
<form onSubmit={this.handleSubmit} className="ui form attached fluid segment">
  <div className="field">
      <label>Username</label>
      <input onChange={this.handleChange} type="text" id='username' placeholder="Username"/>
    </div>
  <div className="field">
    <label>Email</label>
    <input onChange={this.handleChange} type="email" id='email' name="email" placeholder="Email"/>
  </div>
  <div className="field">
    <label>Password</label>
    <input  onChange={this.handleChange} type="password" id='password' placeholder="Password"/>
  </div>
  <div className="field">
          <label>Choose photo</label>
          <input onChange={this.uploadfile} type="file" placeholder="choose profilephoto"/>
          </div>
  <div className="inline field">
    <div className="ui checkbox">
      <input type="checkbox"/>
      <label htmlFor="terms">I agree to the terms and conditions</label>
    </div>
  </div>
  <button className="ui blue submit button">Submit</button>
  {authError ? <p>{authError}</p> : null}
</form>
<div className="ui bottom attached warning message">
  <i className="icon help"></i>
  Already signed up? <Link to='/signin'>Login here</Link> instead.
</div>
</div>
</div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
     signUp: (newUser) => dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
