import React from 'react'
import Exploresummary from './Exploresummary'


const Postlist = ({posts}) => {
    return (
         <div className="explore-images">
                 { posts && posts.map(post => {
                     return(
                         
                         <Exploresummary post={post} key={post.id}/>
                        
                         
                     )
                 })}
            </div>
    )
}

export default Postlist;