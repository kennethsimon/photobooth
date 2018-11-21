import React from 'react'
import {NavLink} from 'react-router-dom'
import {signOut} from '../../store/actions/authActions'
import {connect} from 'react-redux'


const Signedinlinks = (props) => {
    return ( 
    <div className="menu right link-item">  
    <NavLink to='/explore' className="item"  data-tooltip="Explore" data-position='bottom center' data-inverted=""><i className="compass outline large icon"></i></NavLink>
    <NavLink to='/submitphoto' className="item" data-tooltip="Submit photo" data-position='bottom center' data-inverted=""><i className="plus circle large icon"></i></NavLink>
    <button onClick={props.signOut} className="item" data-tooltip="Log out" data-position='bottom center' data-inverted=""><i className="sign-out large icon"></i></button>  
    <div className="item">
    <img className="ui avatar image" src={props.profile.userphoto} alt={props.profile.username}/>
        </div>       
    </div>                  
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(Signedinlinks);