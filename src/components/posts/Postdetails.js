import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'


const Postdetails = (props) => {
  const {posted} = props;
  if(posted){
    return (
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
     <div className="ui labeled button" tabindex="0">
  <div className="ui button">
    <i className="heart icon"></i> Like
  </div>
  <Link to='/' className="ui basic label">
    2,048
  </Link>
</div>
     </div>
        </div>
     
      <div className="ui three column centered grid">
  <div className="column">
    <div className="ui fluid card">
      <div className="image">
        <img className='ui image fluid' src={posted.photoUrl} alt='detail'/>
      </div>
      <div className="content">
        <div className="header">
        <Link to='/' class="ui tag label">{posted.tag}</Link>
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
      <div className="container">
      <div className="ui active progress">
      <div className="bar">
      <div className="progress"></div>
      </div>
      <div className="label">Uploading Files</div>
      </div>
      </div>
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