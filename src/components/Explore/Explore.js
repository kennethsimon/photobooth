import React, { Component } from "react";
import Explorecontent from './Explorecontent'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'



class Explore extends Component {
  render() {
    const {posts} = this.props;
    return (
      <div className='ui container'> 
       <h2>Explore</h2>
       <div className="explore-tab">
         <div className="explore-header">
           <h1>Latest images</h1>
           <p>see all</p>
         </div>
         
       <Explorecontent posts={posts}/>
       
       </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.firestore.ordered.posts
  }
}

export default compose(connect(mapStateToProps),firestoreConnect([
  {collection: 'posts', orderBy: ['createdAt', 'desc'], limit: 3}
]))(Explore);