import React from 'react'
import Postsummary from './Postsummary'


const Postlist = ({posts}) => {
    return (
         <div className="photos">
                 { posts && posts.map(post => {
                     return(
                         
                         <Postsummary post={post} key={post.id}/>
                        
                         
                     )
                 })}
            </div>
    )
}

export default Postlist;