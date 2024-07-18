import { filterFavourite } from "../../util/util";
import UserBlock from "../User/UserBlock";
import classes from './Favourites.module.css';
import { useSelector } from "react-redux";

export default function Favourites(){

  const data = useSelector(state=>state.data);

  const favData = filterFavourite(data);

  const number = favData.length;
  return (
    <>
      <header className={number< 1? classes.noData :classes.header}>
        <h2>Favourites</h2>
        <div className= {classes.counter}><span>{number}</span></div>
      </header>
      <UserBlock data={favData}/>
    </>
  );
}