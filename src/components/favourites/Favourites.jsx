import { filterFavourite } from "../../util/util";
import UserBlock from "../User/UserBlock";
import classes from './Favourites.module.css';

const DUMMY_DATA = [
  { name: 'user1', email: 'user1@email.com', id: Math.random(),favourite: true },
  { name: 'user2', email: 'user2@email.com', id: Math.random(),favourite: false },
  { name: 'user3', email: 'user3@email.com', id: Math.random(),favourite: false },
  { name: 'user4', email: 'user4@email.com', id: Math.random(),favourite: true },
];

export default function Favourites(){

  const data = filterFavourite(DUMMY_DATA);

  const number = data.length;
  return (
    <>
      <header className={classes.header}>
        <h2>Favourites</h2>
        <div className= {classes.counter}><span>{number}</span></div>
      </header>
      <UserBlock DUMMY_DATA={data}/>
    </>
  );
}