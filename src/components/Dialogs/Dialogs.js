import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props, dialogService) => {


   // var dialogService = new DialogService();
   // dialogService.getItem(); //vukluk do servera


   let dialogsElements = props.dialogs.map(x => {
      return (
         <DialogItem name= {x.name} id= {x.id}/>
      )
   })

   let messagesElements = props.messages.map(x => {
      return (
         <Message message = {x.message} />
      )
   })

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogItems}>
             {dialogsElements}
         </div>
         <div className={classes.messages}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs