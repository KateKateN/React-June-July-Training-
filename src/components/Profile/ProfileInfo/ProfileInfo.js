import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
   return (
      <div>
         <div className={classes.banner}>
            <img className={classes.img} src="https://images.pexels.com/photos/714525/pexels-photo-714525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
         </div>
         <div className={classes.user}>
            <div className={classes.userImg}><img src="https://images.pexels.com/photos/48785/horse-portrait-head-halter-48785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /></div>
            <div className={classes.userInfoWrapper}>
               <div className={classes.userName}> Kate Natochii</div>
               <div className={classes.infoTitle}> Date of Birth:
                  <div className={classes.userInfo}>20.12 1996</div>
               </div>
               <div className={classes.infoTitle}> City:
                  <div className={classes.userInfo}>Lviv</div>
               </div>
               <div className={classes.infoTitle}> Education:
                  <div className={classes.userInfo}>Lviv University of Trade and Economics</div>
               </div>
               <div className={classes.infoTitle}> Web Site:
                  <div className={classes.userInfo}><a href="http://localhost:3000/">http://localhost:3000/</a></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProfileInfo