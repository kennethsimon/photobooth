import React from 'react'
import {NavLink} from 'react-router-dom'


const Signedoutlinks = () => {
    return (
        <div className="menu right link-item">
                <NavLink to='/explore' className="item" data-tooltip="Explore" data-position='bottom center' data-inverted=""><i class="compass outline large icon"></i></NavLink>
                <NavLink to='/signin' className="item" data-tooltip="Login" data-position='bottom center' data-inverted=""><i class="sign-in large icon"></i></NavLink>
                <NavLink to='/signup' className="item" data-tooltip="Register" data-position='bottom center' data-inverted=""><i class="user plus large icon"></i></NavLink>         
                </div> 
    )
}

export default Signedoutlinks;