import React, { Component } from 'react'
import Postlist from '../posts/Postlist'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

 class Dashboard extends Component {
  render() {
    const {posts} = this.props;
    return (
        <div>
     <Postlist posts={posts}/>
     </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.firestore.ordered.posts
  }
}

export default compose(connect(mapStateToProps),firestoreConnect([
  {collection: 'posts', orderBy: ['createdAt', 'desc']}
]))(Dashboard);
