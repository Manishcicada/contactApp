import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { pageAction } from '../../store/activePage';


export default function Header(){

  const dispatch = useDispatch();
  const state = useSelector(state => state.page.page);

  function handlePageChange(payload){
    dispatch(pageAction.changePage(payload));
  }
  return(
    <>
      <header className = {classes.header}>
        <h2>User Manual</h2>
        <nav className = {classes.nav}>
          <ul>
            <li>
              <button 
                className= {state==='AddContact'?classes.active : undefined}
                onClick={()=>handlePageChange("AddContact")}
              >
                Add Contact
              </button>
            </li>
            <li>
              <button
                className= {state==='ContactList'?classes.active : undefined}
                onClick={()=>handlePageChange("ContactList")}
              >
                Contact List
              </button>
            </li>
            <li>
              <button
                className = {state =='Favourites'?classes.active:undefined}
                onClick={()=>handlePageChange("Favourites")}
              >
                Favourites
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}