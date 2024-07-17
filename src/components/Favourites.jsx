import UserBlock from "./UserBlock";
import classes from './Favourites.module.css';

const DUMMY_DATA = [
  { name: 'user1', email: 'user1@email.com', id: Math.random() },
  { name: 'user2', email: 'user2@email.com', id: Math.random() },
  { name: 'user3', email: 'user3@email.com', id: Math.random() },
  { name: 'user4', email: 'user4@email.com', id: Math.random() },
];

export default function Favourites(){
  return (
    <>
      <header className={classes.header}>
        <h2>Favourites</h2>
        <div className= {classes.counter}><span>1</span></div>
      </header>
      <UserBlock DUMMY_DATA={DUMMY_DATA}/>
    </>
  );
}