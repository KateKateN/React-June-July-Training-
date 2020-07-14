import React from 'react'
import Post from './Posts/Post'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {

   let postsElements = props.posts.map(x => {
      return (
         <Post message = {x.message} likes = {x.likes} />
      )
   })

   return (
      <div className={classes.postsWrapper}>
         <div className = {classes.createPost}>
            <div className= {classes.title}>My Posts</div>
            <input className = {classes.textarea} placeholder= "your news ..."></input>
            <div className= {classes.buttonWrapper}><button className = {classes.button}>Send</button></div>
         </div>
         <div className= {classes.posts}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts