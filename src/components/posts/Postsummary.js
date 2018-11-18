import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'


const Postsummary = ({post}) => {
    return (
      
        <div className="photo-card">
    <div className="ui fluid card">
  <div className="content">
    <div className="right floated meta">{moment(post.createdAt.toDate()).fromNow()}</div>
    <img className="ui avatar image" src={post.userphoto} alt='user'/> {post.username}
  </div>
  <div className="image">
  <div className="ui placeholder">
  <Link to={'/post/' + post.id}>
  <div className="post-images">
  <img className="ui image fluid" src={post.photoUrl} alt=''/>
  </div>
  </Link>
  </div>
  </div>
  <div className="content">
    <span className="right floated meta">
      <i className="heart outline like icon"></i>
      17 likes
    </span>
    <i className="comment icon"></i>
    3 comments
  </div>
  <div className="extra content">
    <div className="ui large transparent left icon input">
      <i className="heart outline icon"></i>
      <input type="text" placeholder="Add Comment..."/>
    </div>
  </div>
</div>
</div>
     
    )
}

export default Postsummary;