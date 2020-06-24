import React from 'react';

const Profile = () => {
   return (
      <div className="content">
         <div className="content__banner">
            <img className="content__img" src="https://images.pexels.com/photos/714525/pexels-photo-714525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
         </div>
         <div className="user">
            <div className="user__img"><img src="" /></div>
            <div className="user__infoWrapper">
               <div className="user__name"></div>
               <div className="user__info"> Date of Birth: 20.12 1996 </div>
               <div className="user__info">City: Lviv</div>
               <div className="user__info">Education: Lviv University of Trade and Economics</div>
               <div className="user__info">Web Site: <a href="http://localhost:3000/">http://localhost:3000/</a></div>
            </div>
         </div>
         <div className="postsWrapper">

         </div>
      </div>
   )
}

export default Profile;