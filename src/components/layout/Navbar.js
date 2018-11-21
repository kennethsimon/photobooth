import React from 'react'
import {Link} from 'react-router-dom';
import Signedinlinks from './Signedinlinks'
import Signedoutlinks from './Signedoutlinks'
import {connect} from 'react-redux'


const Navbar = (props) => {
  const {auth, profile} = props;
  const links = auth.uid ? <Signedinlinks profile={profile}/> : <Signedoutlinks/>;
    return (
      <div className="ui container">
      <div className="ui secondary  menu navbar-item">
                <div className="item">
                        <Link to='/' className="item logo-bar">
                               Pbooth
                              </Link>
                </div>
                <div className="left menu">
                        <div className="ui loading item search">
                                <div className="ui icon input">
                                  <input className="prompt" type="text" placeholder="Search..."/>
                                  <i className="search icon"></i>
                                </div>
                                <div className="results"></div>
                              </div>
                </div>
                <div className="menu right link-item">
                {links}
                </div>
              </div>
        
      </div>
       
    )
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navbar);