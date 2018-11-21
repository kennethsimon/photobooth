import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'


const Postdetails = (props) => {
  const {posted} = props;
  if(posted){
    return (
    <div className="details-container">
    <div className='ui container'>
        <div className='detail-header'>
        <div>
     <img className="ui avatar image" src={posted.userphoto} alt='det'/>
     <span>{posted.username}</span>
     </div>
     <div>
     <button className="ui icon button">
     <i className="arrow down icon"></i>
     </button>
    
     </div>
        </div>
     
        <div className="details-image">
    <div className="ui fluid card">
      
      <div className="image-size">
      <div className="image borderless">
        <img className='details-image-posted' src={posted.photoUrl} alt='detail'/>
      </div>
      </div>
      <div className="content">
        <div className="header">
        <Link to='/' className="ui tag label">{posted.tag}</Link>
        </div>
      <div className="description">
       {posted.description}
     </div>
    </div>
  </div>
  </div>
      </div>
    </div>
    )
  }else{
    return (
      <div className="ui active centered inline loader"></div>
      )
  }
    
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const post = state.firestore.data.posts;
  const posted = post ? post[id] : null;
  return {
    posted: posted,
}
}
export default compose(connect(mapStateToProps), firestoreConnect([
  {collection: 'posts'}
]))(Postdetails);