import React, { Component } from 'react'
import {createPost} from '../../store/actions/postActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class Submitphoto extends Component {
  state = {
    photoUrl: '',
    description: '',
    tag: '',
   }
    uploadfile = async e => {
     const files = e.target.files;
     const data = new FormData();
     data.append('file', files[0]);
     data.append('upload_preset', 'photopost');

     const res = await fetch('https://api.cloudinary.com/v1_1/dedfrilse/image/upload', {
       method: 'POST',
       body: data
     });

     const file = await res.json();
     console.log(file);
     this.setState({
       photoUrl: file.secure_url,
     });

   }
   handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
   }
 
   handleSubmit = (e) =>{
     e.preventDefault();
     this.props.createPost(this.state)
     this.props.history.push('/');
    }
  render() {
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to='/signin'/>
    return (
     <div className="signinform">
          <div className="signin-content">
          <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
          <label>Choose photo</label>
          <input onChange={this.uploadfile} type="file" placeholder="choose photo"/>
          </div>
          <div className="field">
          <label>Tag</label>
          <input onChange={this.handleChange} type="text" id='tag' placeholder="add tag eg travel, sport etx"/>
          </div>
          <div className="field">
           <label>Description</label>
           <textarea onChange={this.handleChange} id='description'></textarea>
           </div>
          
          <button className="ui button" type="submit">Submit photo</button>
          </form>
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
     auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
return {
  createPost: (post) => dispatch(createPost(post))
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Submitphoto);
