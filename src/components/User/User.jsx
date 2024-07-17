import classes from './User.module.css';
import userImage from '../../assets/user.png';
import deleteUser from '../../assets/deleteUser.png';
import Modal from '../Modal/Modal';

import { useState } from 'react';

export default function User({ userName, userEmail, favourite }) {

  const [open, setOpen] = useState();

  function handleDeleteUser(){
    //
    setOpen(false);
  }

  return (
    <>
      <div className={classes.userInfo}>
        <div className={classes.userDetails}>
          <img src={userImage} />
          <span className={classes.textDetails}>
            <p>{userName}</p>
            <p>{userEmail}</p>
          </span>
        </div>
        <div className={classes.actionButtons}>
          <button className={favourite?classes.favourite:classes.addToFavourites}>{favourite ? 'Remove From Favourites' : 'Add to Favourites'}</button>
          <button
            className={classes.deleteButton}
            onClick={()=>setOpen(true)}
          >
            <img
              src={deleteUser}
            />
          </button>
        </div>
      </div>
      <Modal 
      open={open} 
      setOpen={setOpen} 
      message={userName}
      onConfirm={handleDeleteUser}
      />
    </>
  );
}