import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'


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
          <div className="signin-content">
          <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
          <label>Username</label>
          <input onChange={this.handleChange} type="text" id='email' placeholder="Username"/>
          </div>
          <div className="field">
          <label>Password</label>
          <input onChange={this.handleChange} type='password' id='password' placeholder="Password"/>
          </div>
          <button className="ui button" type="submit">Submit</button>
          {authError ? <p>{authError}</p> : null}
          </form>
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
