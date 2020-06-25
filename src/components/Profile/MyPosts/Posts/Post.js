import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
   return (
      <div>
         <div className={classes.post}>
            <div className={classes.userImg}>
               <img src="https://images.pexels.com/photos/48785/horse-portrait-head-halter-48785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <div className={classes.postText}>{props.message}</div>
            <div className={classes.likes}>{props.likes} likes</div>
         </div>
      </div>
   )
}

export default Post