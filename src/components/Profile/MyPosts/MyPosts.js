import React from 'react'
import Post from './Posts/Post'
import classes from './MyPosts.module.css'

const MyPosts = () => {
   return (
      <div className={classes.postsWrapper}>
         <div className = {classes.createPost}>
            <div className= {classes.title}>My Posts</div>
            <input className = {classes.textarea} placeholder= "your news ..."></input>
            <div className= {classes.buttonWrapper}><button className = {classes.button}>Send</button></div>
         </div>
         <div className= {classes.posts}>
            <Post message = "Hey! How are you?" likes = "15" />
            <Post message = "Have a nice day!" likes = "20" />
            <Post message = "react props" likes = "30" />
         </div>
      </div>
   )
}

export default MyPosts