import classes from './User.module.css';

import userImage from '../assets/user.png';
import deleteUser from '../assets/deleteUser.png';

export default function User({userName, userEmail, favourite}){
  return(
    <div className = {classes.userInfo}>
      <div className= {classes.userDetails}>
        <img src ={userImage}/>
        <span className={classes.textDetails}>
          <p>{userName}</p>
          <p>{userEmail}</p>
        </span>
      </div>
      <div className = {classes.actionButtons}>
        <button className={classes.addToFavourites}>{favourite?'Remove From Favourites':'Add to Favourites'}</button>
        <button className={classes.deleteButton}>
          <img 
          src= {deleteUser}
          />
          </button>
      </div>
      
    </div>
  );
}